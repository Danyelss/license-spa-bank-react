import React, { useState, useLayoutEffect } from "react";
import Header from '../layouts/Header';
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
        console.log('started');
        clicked();
    }, []);

    const [isCopied, setIsCopied] = useState(false);

    const copyTextToClipboard = (adress) => {
        if ('clipboard' in navigator) {
            return navigator.clipboard.writeText(adress);
        } else {
            return document.execCommand('copy', true, adress);
        }
    }

    const handleCopyClick = () => {
        copyTextToClipboard(adress)
            .then(() => {
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

            <h1>Deposit Ethereum</h1>

            <div className="rectangleDeposit">
                <div className="vaultTextAlignment">
                    <input className="depositCopyField" type="text" value={adress} readOnly />

                    <button className="depositCopyButton" onClick={handleCopyClick}>
                        <span>{isCopied ? 'Copied!' : 'Copy'}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DepositPage;
