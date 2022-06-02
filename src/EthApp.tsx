import "./App.css";
import { useMoralis, useNFTBalances } from "react-moralis";
import Moralis from "moralis";
import { useEffect, useRef, useState } from "react";
import {
    useMoralisWeb3Api,
    useTokenPrice,
    useERC20Balances,
} from "react-moralis";
import Account from "./Account";



export function detectMob() {
    return window.innerWidth <= 800 && window.innerHeight <= 1000;
}


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

    // useEffect(() => {
    //     if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) {
    //         if (detectMob()) {
    //             enableWeb3({ provider: "walletconnect" });
    //             return;
    //         }
    //         enableWeb3();
    //     }
    // }, [isAuthenticated, isWeb3Enabled]);

    return (
        <>
            <Account />
        </>
    );
};

export default EthApp;
