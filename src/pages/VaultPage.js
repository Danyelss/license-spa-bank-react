import React, { useState, useEffect } from "react";
import Header from '../layouts/Header';
import { ReactComponent as ReloadIndicator } from '../svgs/reloadIndicator.svg';
import Transaction from '../requests/PostTransaction';

const VaultPage = () => {
    const [balanceETH, setBalanceETH] = useState();
    const [balanceDLR, setBalanceDLR] = useState();

    const clicked = () => {    
        Transaction('balance','','')
          .then((result) => {
            setBalanceETH(result.data.eth);
            setBalanceDLR(result.data.fiat);
          })
          .catch(error => {
            if (error.response.status === 403)
              console.log("Forbidden");
          });
      }
      
      useEffect(() => {
        setInterval(() => {
          clicked();
          console.log('does it work?');          // sometimes called more than 2 times on a row
        }, 10000);
      });
                              // dc pl lui stalin ii da de 5 ori in loc de una
    return (
        <div>
          {clicked()}           
            <Header />
            <div className="rotate-center reloadIndicator center2">
                <ReloadIndicator />
            </div>
            
            <h1>Balance: {balanceETH} ETH</h1>
            <h1>Balance: {balanceDLR} $</h1>
        </div>
    );
};

export default VaultPage;
