import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as VaultIcon } from '../assets/svgs/vault.svg';
import { ReactComponent as EthDepositIcon } from '../assets/svgs/deposit.svg';
import { ReactComponent as WithdrawIcon } from '../assets/svgs/withdraw.svg';
import '../App.css';
import Header from '../layouts/Header';

const HomePage = () => {
    return (
        <div>
            <Header />

            <Link to='/vault'>
                <Vault />
            </Link>

            <Link to='/deposit'>
                <Deposit />
            </Link>

            <Link to='/withdraw'>
                <Withdraw />
            </Link>
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
