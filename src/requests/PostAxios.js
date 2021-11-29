import axios from 'axios';

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

const url = 'https://license-cors-proxy.herokuapp.com/https://license-crypto-bank.herokuapp.com/api/login';

const Login = async(username, password) => {

    const params = new URLSearchParams()
    params.append('username', username);
    params.append('password', password);

    return new Promise((resolve, reject) => {
        axios.post(url, params, config)
            .then((result) => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

export default Login;