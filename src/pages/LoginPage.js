import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { saveAccessToken, saveRefreshToken } from '../data/Tokens';
import Login from '../api/PostLogin';

//import { getRefreshToken } from '../token/Tokens';

const LoginPage = () => {

  //const isActive = false;
  const navigate = useNavigate();

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();


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
        message += "Password should be longer than 4 characters";
    } else {
      message += "Password field should not be empty";
    }

    if (message === '') {
      await Login(username, password)
        .then((result) => {
          saveAccessToken(result.data.acces_token);
          saveRefreshToken(result.data.refresh_token);
          navigate('/home');
        })
        .catch(error => {
          if (error.response.status === 403)
            alert("Wrong username or password");
        });
    } else {
      alert(message);
    }
  }

  return (
    <div>
      <header>
        <nav>
          <div className="register">
            <Link to="/register">
              <button className="submitButton">Register</button>
            </Link>
          </div>
        </nav>
      </header>
      <div className="circle deposit slide-bottom">
        <form className="center" onSubmit={handleSubmit}>
          <label>
            <p className="whiteText">Username</p>
            <input className="inputArea" type="text" onChange={e => setUserName(e.target.value)} />
          </label>
          <label>
            <p className="whiteText">Password</p>
            <input className="inputArea" type="password" onChange={e => setPassword(e.target.value)} />
          </label>
          <div>
            <p></p>
            <button className="submitButton" type="submit" onSubmit={handleSubmit}>Log In</button>
          </div>
        </form>
        <p>v.1.3</p>
      </div>
    </div>
  );
}

export default LoginPage;

/*


      .then((result) => {
        console.log(result);
        console.log(typeof result.data.acces_token);
        saveAccessToken(result.data.acces_token);
        saveRefreshToken(result.data.refresh_token);
      })
      .catch(error => {
       // if (error.response.status === 403)
         // console.log("Forbidden");

      }); */