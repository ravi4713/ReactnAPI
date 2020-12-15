import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID OWnbxpnkEs5d1Pn5Yz85JdJRqW7Ybe96KksH9dunKLw'
    }
})