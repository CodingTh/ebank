import axios from 'axios'
//axios.defaults.baseURL = '/lsapi';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
export default axios