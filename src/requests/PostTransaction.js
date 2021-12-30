import axios from 'axios';
import { getAccessToken } from '../token/Tokens';

const Transaction = async (option, address, ammount) => {
    let url = 'https://license-cors-proxy.herokuapp.com/https://license-crypto-bank.herokuapp.com/api/';
    const params = new URLSearchParams();

    switch (option) {
        case 'deposit':
            url = url + 'deposit';
            console.log(url);
            break;
        case 'withdraw':
            url = url + 'withdraw';

            // withdraw logic + requests
            params.append('address', address);
            params.append('ammount', ammount);

            console.log(url);
            break;
        case 'balance':
            url = url + 'balance';
            console.log(url);
            break;
        default:
    }

    const auth = getAccessToken();

    const config = {
        headers: {
            'Authorization': `Bearer ${auth}`,
        }
    }

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

export default Transaction;