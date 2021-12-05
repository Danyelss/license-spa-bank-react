import React, { useState } from "react";
import Header from '../layouts/Header';
import { ReactComponent as ReloadIndicator } from '../svgs/reloadIndicator.svg';
import Balance from '../requests/PostBalance';

const VaultPage = () => {
    const [balanceETH, setBalanceETH] = useState();
    const [balanceDLR, setBalanceDLR] = useState();


    const clicked = async e => {
        e.preventDefault();
    
        await Balance()
          .then((result) => {
            setBalanceETH(result.data.eth);
            setBalanceDLR(result.data.fiat);
          })
          .catch(error => {
            if (error.response.status === 403)
              console.log("Forbidden");
          });
      }

    return (
        <div>
            <Header />
            <div className="rotate-center reloadIndicator center2">
                <ReloadIndicator />
            </div>

            <button onClick={clicked}/>

            <h1>Balance: {balanceETH} ETH</h1>
            <h1>Balance: {balanceDLR} $</h1>
        </div>
    );
};

export default VaultPage;
