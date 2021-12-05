import axios from 'axios';
import {
    getAccessToken,
    //getRefreshToken
} from '../token/Tokens';


const url = 'https://license-cors-proxy.herokuapp.com/https://license-crypto-bank.herokuapp.com/api/balance';

const Balance = async () => {

    const auth = getAccessToken();

    const config = {
        headers: {
            'Authorization': `Bearer ${auth}`,
        }
    }

    console.log(auth);
    const params = new URLSearchParams();
    //params.append('username', username);
    //params.append('password', password);

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

export default Balance;