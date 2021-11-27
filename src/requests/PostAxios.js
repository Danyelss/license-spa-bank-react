import axios from 'axios';
import React from 'react';

const api = axios.create({
    baseURL: 'http://localhost:8081/api/'
})

const params = new URLSearchParams()
params.append('username', 'beni');
params.append('password', '0000');

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

const url = 'https://license-cors-proxy.herokuapp.com/https://license-crypto-bank.herokuapp.com/api/login';

    const login = async () => {
        axios.post(url, params, config)
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
              // Do somthing
            })
    };

    export default login;


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