import axios from 'axios';

const config = {
    headers: {
        'Content-Type' : 'text/json'
        //'application/json'
    }
}

const url = 'https://license-cors-proxy.herokuapp.com/https://license-crypto-bank.herokuapp.com/api/register';

const Register = async(user) => {

    const params = new URLSearchParams()
    params.append('username', user);

    return new Promise((resolve, reject) => {
        axios.post(url, user, config)
            .then((result) => {
                resolve(result);
            })
            .catch(error => {
                reject(error);
            });
    });
}

export default Register;