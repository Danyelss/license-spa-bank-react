import React, { useState } from "react";
import Header from '../layouts/Header';
import Transaction from '../api/PostTransaction';


const WithdrawPage = () => {

    const [address, setAddress] = useState();
    const [ammount, setAmmount] = useState();

    const handleSubmit = async e => {
        e.preventDefault();

        let message = '';

        if (address != null) {
            if (address.length != 42) {
                message += "Address should be 42 characters\n";
            }
        } else message += "Address field should not be empty\n";

        if (ammount != null) {
            if (isNaN(ammount))
                message += "Ammount must be a number";
        } else {
            message += "Ammount field should not be empty";
        }

        if (message === '') {
            Transaction('withdraw', address, ammount)
                .then((result) => {
                    console.log(result.data.response);

                })
                .catch(error => {
                    if (error.response.status === 403)
                        console.log("Forbidden");
                });
        } else alert(message);
    }

    return (
        <div>
            <Header />
            <div className="whiteSquare  slide-bottom">
                <form className="center" onSubmit={handleSubmit}>
                    <label>
                        <p className="whiteText">Address</p>
                        <input className="depositCopyField" type="text" onChange={e => setAddress(e.target.value)} />
                    </label>
                    <label>
                        <p className="whiteText">Ammount</p>
                        <input className="depositCopyField" type="text" onChange={e => setAmmount(e.target.value)} />
                    </label>
                    <div>
                        <p></p>
                        <button className="submitButton" type="submit" onSubmit={handleSubmit}>Withdraw</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default WithdrawPage;