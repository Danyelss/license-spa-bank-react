import React, { useState, useEffect, useLayoutEffect } from "react";
import Header from '../layouts/Header';
import { ReactComponent as ReloadIndicator } from '../svgs/reloadIndicator.svg';
import Transaction from '../requests/PostTransaction';

const VaultPage = () => {
  const [balanceETH, setBalanceETH] = useState();
  const [balanceDLR, setBalanceDLR] = useState();

  const clicked = () => {
    Transaction('balance', '', '')
      .then((result) => {
        setBalanceETH(result.data.eth);
        setBalanceDLR(result.data.fiat);
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      (async () => {
        console.log('does it work?');          // sometimes called more than 2 times on a row
        clicked();
      })();
    }, 1000 * 10);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Header />
      <div className="rotate-center reloadIndicator center2">
        <ReloadIndicator />
      </div>
      <div className="rectangleBalance">
        <div className="vaultTextAlignment">
          <div className="balanceText">{balanceETH}</div>
        </div>
      </div>
    </div>
  );
};

/*

</div>
      <div className="rectangleBalance">
      <div className="vaultTextAlignment">
          <div className="balanceText">{balanceDLR}</div>
        </div>

*/

export default VaultPage;
