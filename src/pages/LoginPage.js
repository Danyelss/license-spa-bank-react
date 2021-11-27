import React, { useState } from "react";

//import login from '../requests/PostAxios';
//import useToken from '../token/Tokens';

/*
async function loginUser(credentials) {

 return fetch('http://localhost:8082/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}
*/

const LoginPage = () => {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  //const tokenFunction = useToken();
  //console.log(tokenFunction);

  const handleSubmit = async e => {
      e.preventDefault();
      //const token = await loginUser({
      //  username,
     //   password
     // });

      //console.log(token.token);
      console.log("works");

      //tokenFunction.setToken(token.token);
    }

  return(
    <div className="login-wrapper square">
      <h1>Log In</h1>
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
          <button type="submit" onSubmit={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
