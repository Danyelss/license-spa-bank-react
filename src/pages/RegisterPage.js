import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Register from '../api/PostRegister';

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

        let message = '';

        if (username != null) {
            if (username.length < 4) {
                message += "Username should be longer than 4 characters\n";
            }
        } else message += "Username field should not be empty\n";

        if (password != null) {
            if (password.length < 4)
                message += "Password should be longer than 4 characters\n";
        } else {
            message += "Password field should not be empty\n";
        }

        if (email != null) {
            if (email.length < 4) {
                message += "The email should be longer than 6 characters\n";
            }
        } else message += "Email field should not be empty\n";


        if (firstName == null)
            message += "First Name field should not be empty\n";

        if (lastName == null)
            message += "Last Name field should not be empty\n";

        if (phoneNumber != null) {
            if (phoneNumber.length < 10)
                message += "The Phone Number should have at least 10 digits\n";
        } else {
            message += "Phone Number field should not be empty\n";
        }

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

        if (message === '') {
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
        else
            alert(message);
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
