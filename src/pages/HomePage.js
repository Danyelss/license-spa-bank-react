import React from 'react';
import { ReactComponent as VaultIcon } from '../svgs/vault.svg';
import { ReactComponent as EthDepositIcon } from '../svgs/deposit.svg';
import { ReactComponent as WithdrawIcon } from '../svgs/withdraw.svg';
import '../App.css';


const HomePage = () => {
    return (
        <div>

            <Vault />

            <Deposit />

            <Withdraw />

        </div>
    );
};

function Vault() {
    return (
        <div className="square slide-bottom">
            <VaultIcon className="shadow" />
        </div>

    );
}

function Deposit() {
    return (
        <div className="shadow deposit slide-bottom">
            <EthDepositIcon className="shadow" />
        </div>

    );
}

function Withdraw() {
    return (
        <div className="withdraw slide-bottom">
            <WithdrawIcon className="shadow" />
        </div>

    );
}

export default HomePage;
