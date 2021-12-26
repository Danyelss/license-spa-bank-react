import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from '../layouts/Header';
//import { ReactComponent as ReloadIndicator } from '../svgs/reloadIndicator.svg';


const WithdrawPage = () => {
    const navigate = useNavigate();

    const [address, setAddress] = useState();
    const [ammount, setAmmount] = useState();

    const handleSubmit = async e => {
        e.preventDefault();

        //await Login(username, password)
        // .then((result) => {
        // saveAccessToken(result.data.acces_token);
        // saveRefreshToken(result.data.refresh_token);
        // navigate('/home');
        //  })
        // .catch(error => {
        //    if (error.response.status === 403)
        //      console.log("Forbidden");
        //  });
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
