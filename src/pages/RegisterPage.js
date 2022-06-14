import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Register from '../requests/PostRegister';


const RegisterPage = () => {
    const navigate = useNavigate();


    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();


    const handleSubmit = async e => {
        e.preventDefault();

        let user = {
            "username": username,
            "password": password,
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "phone_number": phoneNumber,
            "roles": [
            ]
        };

        await Register(JSON.stringify(user))
            .then((result) => {
                console.log(result);
                //navigate('/home');
            })
            .catch(error => {
                if (error.response.status === 403)
                    console.log("Forbidden");
            });
    }

    return (
        <div>
            <Link to="/"><button className="submitButton">Back</button></Link>

            <form className="center" onSubmit={handleSubmit}>
                <label>
                    <p className="whiteText">Username</p>
                    <input className="depositCopyField" type="text" onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    <p className="whiteText">Password</p>
                    <input className="depositCopyField" type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <label>
                    <p className="whiteText">Email</p>
                    <input className="depositCopyField" type="text" onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <p className="whiteText">First Name</p>
                    <input className="depositCopyField" type="text" onChange={e => setFirstName(e.target.value)} />
                </label>
                <label>
                    <p className="whiteText">Last Name</p>
                    <input className="depositCopyField" type="text" onChange={e => setLastName(e.target.value)} />
                </label>
                <label>
                    <p className="whiteText">Phone Number</p>
                    <input className="depositCopyField" type="text" onChange={e => setPhoneNumber(e.target.value)} />
                </label>
                <div>
                    <p></p>
                    <button className="submitButton" type="submit" onSubmit={handleSubmit}>Register</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;
