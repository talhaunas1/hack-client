import axios from 'axios';



const instance = axios.create({
    baseURL: "https://drab-pear-scorpion-cape.cyclic.app/api",
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
    },
});

export default instance;