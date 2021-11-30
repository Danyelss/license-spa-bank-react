import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { saveAccessToken, saveRefreshToken } from '../token/Tokens';



import Login from '../requests/PostAxios';

//import { existsAccessToken, getRefreshToken } from '../token/Tokens';

const LoginPage = () => {

  //const isActive = false;
  const navigate = useNavigate();

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();

    await Login(username, password)
      .then((result) => {
        saveAccessToken(result.data.acces_token);
        saveRefreshToken(result.data.refresh_token);
        navigate('/home');
      })
      .catch(error => {
        if (error.response.status === 403)
          console.log("Forbidden");
      });
  }

  return (
    <div className="circle ">
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
          <button className="submitButton"type="submit" onSubmit={handleSubmit}>Log In</button>
        </div>
      </form>
      <p>v.1.1</p>
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