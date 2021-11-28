import React, { useState } from "react";
import { Link } from "react-router-dom";

import Login from '../requests/PostAxios';

import { existsAccessToken, getRefreshToken } from '../token/Tokens';


async function loginUser(username, password) {
  Login(username, password);
}

const LoginPage = () => {

  const isActive = false;

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();

    await loginUser(
      username,
      password
    );
  }

  const mue = async e => {
    e.preventDefault();

    console.log("voua");
  }

  return (
    <div className="login-wrapper circle">
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <Link to="/home">
            <button type="submit" onSubmit={handleSubmit}>Log In</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
