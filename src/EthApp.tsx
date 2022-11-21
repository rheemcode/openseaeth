import "./App.css";
import Account from "./Account";



export function detectMob() {
    return window.innerWidth <= 800 && window.innerHeight <= 1000;
}


const EthApp = () => {

    return (
        <>
            <Account />
        </>
    );
};

export default EthApp;
