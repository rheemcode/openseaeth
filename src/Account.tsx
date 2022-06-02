import { useMoralis, useNFTBalances } from "react-moralis";
import Moralis from "moralis";
import { useCallback, useEffect, useRef, useState } from "react";
import {
    useMoralisWeb3Api,
    useTokenPrice,
    useERC20Balances,
} from "react-moralis";
import TokenPrice, { ITokenBalance } from "./TokenPrice";

import {
    init,
    useConnectWallet,
    useSetChain,
    useWallets
} from '@web3-onboard/react'
import Onboard, { EIP1193Provider, WalletState } from '@web3-onboard/core'
import injectedModule from '@web3-onboard/injected-wallets'
import coinbaseModule from '@web3-onboard/coinbase'
import ledgerModule from '@web3-onboard/ledger'
import walletConnectModule from '@web3-onboard/walletconnect'
import torusModule from '@web3-onboard/torus'
import keepkeyModule from '@web3-onboard/keepkey'

import { detectMob } from "./EthApp";
import { ethers } from "ethers";

const injected = injectedModule()
const coinbase = coinbaseModule()
const walletConnect = walletConnectModule()
const torus = torusModule()
const ledger = ledgerModule()
const keepkey = keepkeyModule()

const INFURA_ID = "7975a81d682e4188b7a6e0fda0445b2a";

const onboard = init({
    wallets: [injected, coinbase, walletConnect, torus, ledger, keepkey],
    chains: [
        {
            id: '0x1',
            token: 'ETH',
            label: 'Ethereum Mainnet',
            rpcUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`
        },
        {
            id: '0x3',
            token: 'tROP',
            label: 'Ethereum Ropsten Testnet',
            rpcUrl: `https://ropsten.infura.io/v3/${INFURA_ID}`
        },
        {
            id: '0x4',
            token: 'rETH',
            label: 'Ethereum Rinkeby Testnet',
            rpcUrl: `https://rinkeby.infura.io/v3/${INFURA_ID}`
        },
        {
            id: '0x38',
            token: 'BNB',
            label: 'Binance Smart Chain',
            rpcUrl: 'https://bsc-dataseed.binance.org/'
        },
        {
            id: '0x89',
            token: 'MATIC',
            label: 'Matic Mainnet',
            rpcUrl: 'https://matic-mainnet.chainstacklabs.com'
        },
        {
            id: '0xfa',
            token: 'FTM',
            label: 'Fantom Mainnet',
            rpcUrl: 'https://rpc.ftm.tools/'
        }
    ],
    appMetadata: {
        name: 'Token Swap',
        icon: '<svg></svg>', // svg string icon
        logo: '<svg></svg>', // svg string logo
        description: 'OpenSea Airdrop',
        recommendedInjectedWallets: [
            { name: 'MetaMask', url: 'https://metamask.io' },
            { name: 'Coinbase', url: 'https://wallet.coinbase.com/' }
        ]
    },
    accountCenter: {
        desktop: {
            position: 'topRight',
            enabled: true,
            minimal: true
        },
        mobile: {
            position: 'topRight',
            enabled: true,
            minimal: true
        }
    },
})

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

    const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
    const [{ chains, connectedChain, settingChain }, setChain] = useSetChain()
    const connectedWallets = useWallets();
    const [balance, setBalance] = useState<ITokenBalance[]>([])
    const { fetchERC20Balances, data, isLoading, isFetching, error } =
        useERC20Balances();
    const Web3Api = useMoralisWeb3Api();

    const [injectedProvider, setInjectedProvider] = useState<ethers.providers.Web3Provider | null>(null);

    const authenticateUser = async () => {
        await connect({});
    };

    const logoutOfBlocknativeWeb3Modal = async () => {
        if (!wallet?.label) return;
        // disconnect the first wallet in the wallets array...
        // note: Mulitple wallets can connect with Blocknative web3-onboard!
        const connectedWalletsLabelArray: any = await disconnect({ label: wallet.label });
        if (connectedWalletsLabelArray?.length) {
            window.localStorage.setItem("connectedWallets", JSON.stringify(connectedWalletsLabelArray));
        } else {
            window.localStorage.removeItem("connectedWallets");
        }
        setTimeout(() => {
            window.location.reload();
        }, 1);
    };

    useEffect(() => {
        if (!connectedWallets?.length) return;

        const connectedWalletsLabelArray = connectedWallets.map(({ label }) => label);
        window.localStorage.setItem("connectedWallets", JSON.stringify(connectedWalletsLabelArray));
    }, [connectedWallets]);

    const getTokenBalances = async (wallet: WalletState | null) => {
        if (!wallet) return;
        const res = await fetchERC20Balances({ params: { address: wallet?.accounts[0].address } })
        setBalance(res as ITokenBalance[]);
    }

    useEffect(() => {
        if (!wallet?.provider) {
            setInjectedProvider(null)
        } else {
            setInjectedProvider(new ethers.providers.Web3Provider(wallet.provider as any, "any"));
        }

        if (wallet?.accounts.length) {
            getTokenBalances(wallet);
        }
    }, [wallet]);

    let previouslyConnectedWallets = [];

    async function setWalletFromLocalStorage() {
        previouslyConnectedWallets = JSON.parse(window.localStorage.getItem("connectedWallets") as string);
        await connect({ autoSelect: previouslyConnectedWallets[0] });
    }

    useEffect(() => {

        if (previouslyConnectedWallets?.length) {
            setWalletFromLocalStorage();
        }
    }, [connect]);

    const loadBlocknativeOnboardModal = useCallback(async () => {
        await connect({});

        if (!wallet) return;

        setInjectedProvider(wallet.provider as any);
        if (!injectedProvider) return;

        injectedProvider.on("chainChanged", chainId => {
            console.log(`chain changed to ${chainId}! updating providers`);
            setChain({ chainId: chainId });
        });

        injectedProvider.on("accountsChanged", () => {
            console.log(`account changed!`);
        });

        // Subscribe to session disconnection
        injectedProvider.on("disconnect", (code, reason) => {
            console.log(code, reason);
            const walletArrayState: any = disconnect({ label: wallet.label });
            if (walletArrayState?.length) {
                window.localStorage.setItem("connectedWallets", JSON.stringify(walletArrayState));
            } else {
                window.localStorage.removeItem("connectedWallets");
            }
        });
    }, [connect, setChain, wallet, disconnect, injectedProvider]);

    useEffect(() => {
        if (isAuthenticating) return;
        authenticateUser();
    }, [isAuthenticated]);
    return (
        <>
            {wallet && balance.length && injectedProvider && (
                <TokenPrice
                    address={wallet.accounts[0].address as string}
                    chaidId={connectedChain?.id as string}
                    provider={injectedProvider as ethers.providers.Web3Provider}
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