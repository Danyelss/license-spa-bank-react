import React from 'react';
import Header from '../layouts/Header';
import { ReactComponent as ReloadIndicator } from '../svgs/reloadIndicator.svg';


const VaultPage = () => {
    return (
        <div>
            <Header />
            <div className="rotate-center reloadIndicator center2">
                <ReloadIndicator />
            </div>

            <h1>Balance: 2323 ETH</h1>
        </div>
    );
};

export default VaultPage;
