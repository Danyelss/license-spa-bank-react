import axios from 'axios';
import {saveAccessToken, saveRefreshToken} from '../token/Tokens';

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

const url = 'https://license-cors-proxy.herokuapp.com/https://license-crypto-bank.herokuapp.com/api/login';

const Login = async (username, password) => {
  //const tokenUtil = TokenUtility();

  const params = new URLSearchParams()
  params.append('username', username);
  params.append('password', password);

  axios.post(url, params, config)
    .then((result) => {
      console.log(result);
      //console.log(typeof result.data.acces_token);
      saveAccessToken(result.data.acces_token);
      saveRefreshToken(result.data.refresh_token);
    })
    .catch((err) => {
      if( err.response.status == 403 )
        console.log("Forbidden");
    })
};

export default Login;


/*
axios({
  method: 'post',     //put
  url: url,
  headers: {'Authorization': 'Bearer'+token},
  data: {
     firstName: 'Keshav', // This is the body part
     lastName: 'Gera'
  }
});


          X-Content-Type-Options: 'nosniff',
          X-XSS-Protection: '1; mode=block',
          Cache-Control: 'no-cache, no-store, max-age=0, must-revalidate',
          Pragma: 'no-cache',
          Expires: '0',
          X-Frame-Options: 'DENY',
          Content-Type: 'application/json',
          Content-Length: '418',
          Date: 'Thu, 18 Nov 2021 08:32:56 GMT',
          Keep-Alive: 'timeout=60',
          Connection: 'keep-alive'
*/