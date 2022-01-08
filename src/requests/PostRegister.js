import axios from 'axios';

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

const url = 'https://license-cors-proxy.herokuapp.com/https://license-crypto-bank.herokuapp.com/api/register';

const Register = async (user) => {

    var config = {
        method: 'post',
        url: 'https://license-cors-proxy.herokuapp.com/https://license-crypto-bank.herokuapp.com/api/register',
        headers: {
            'Content-Type': 'application/json'
        },
        data: user
    };

    return new Promise((resolve, reject) => {
        axios(config)
            .then(function (response) {
                resolve(response);

            })
            .catch(function (error) {
                reject(error);
            });
    });




    // return new Promise((resolve, reject) => {
    //     axios.post(url, user, 
    //         config
    //         )
    //         .then((result) => {
    //             resolve(result);
    //         })
    //         .catch(error => {
    //             reject(error);
    //         });
    // });
}





export default Register;