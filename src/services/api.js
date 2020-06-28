import axios from 'axios';

const api = axios.create({
  headers: {
    Authorization: 'Bearer 1/1160321445511285:14e87fa717b7bca351042d086d059576',
  },
  baseURL: 'https://app.asana.com/api/1.0',
});

export default api;