import React, { useState, useEffect, useLayoutEffect } from "react";
import Header from '../layouts/Header';
import { ReactComponent as ReloadIndicator } from '../assets/svgs/reloadIndicator.svg';
import Transaction from '../api/PostTransaction';

const VaultPage = () => {
  const [balanceETH, setBalanceETH] = useState();

  const aquireData = () => {
    Transaction('balance', '', '')
      .then((result) => {
        setBalanceETH(result.data.eth);
      })
      .catch(error => {
        if (error.response.status === 403)
          console.log("Forbidden");
      });
  }

  useLayoutEffect(() => {
    aquireData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      (async () => {
        aquireData();
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
