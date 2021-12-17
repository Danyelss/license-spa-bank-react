import React, { useState, useEffect, useLayoutEffect } from "react";
import Header from '../layouts/Header';
import { ReactComponent as ReloadIndicator } from '../svgs/reloadIndicator.svg';
import Transaction from '../requests/PostTransaction';

const DepositPage = () => {
    const [adress, setAdress] = useState();

    const clicked = () => {
        Transaction('deposit', '', '')
            .then((result) => {
                setAdress(result.data.adress);
            })
            .catch(error => {
                if (error.response.status === 403)
                    console.log("Forbidden");
            });
    }

    useLayoutEffect(() => {
        console.log('started');          // sometimes called more than 2 times on a row
        clicked();
    }, []);

    /*
    useEffect(() => {
        const intervalId = setInterval(() => {
            (async () => {
                console.log('does it work?');          // sometimes called more than 2 times on a row
                clicked();
            })();
        }, 1000 * 10);

        return () => clearInterval(intervalId);
    }, []);
    */

    const [isCopied, setIsCopied] = useState(false);

    const copyTextToClipboard = (adress) => {
        if ('clipboard' in navigator) {
            return navigator.clipboard.writeText(adress);
        } else {
            return document.execCommand('copy', true, adress);
        }
    }

    const handleCopyClick = () => {
        // Asynchronously call copyTextToClipboard
        copyTextToClipboard(adress)
            .then(() => {
                // If successful, update the isCopied state value
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 1500);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <Header />

            <div className="rectangleBalance">
                <div className="vaultTextAlignment">
                    <input type="text" value={adress} readOnly />
                    {/* Bind our handler function to the onClick button property */}
                    <button onClick={handleCopyClick}>
                        <span>{isCopied ? 'Copied!' : 'Copy'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DepositPage;
