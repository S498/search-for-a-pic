import axios from 'axios';

export default axios.create(
    {
        headers: {
            Authorization: 'Client-ID e4fc0497bfd1712642dbf7fbcfbc1e53c44d09cdf47ea0a95bbe1a3aa11d429c'
        },
        baseURL: 'https://api.unsplash.com'
    }
);