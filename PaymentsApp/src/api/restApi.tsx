import axios from 'axios';

export default axios.create({
    //baseURL: 'https://api-cert.bankingly.com/api',
    baseURL: 'http://9236acd0ca10.ngrok.io'
    // headers: {
    //     Authorization: 'Basic d2ViLmJhbmtpbmdseS5jb21cQzRKRzRBS0VRSVBUUUpCRUkyV1A6cElJNmh2NEpzS0d5NUR0NklnYmhzSUl3QWVaeUZ3QUtCc1gxQ3ZkUlZ1Znk='
    // }
});
