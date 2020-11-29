import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'https://api.anavarro.me/'
});

export default clienteAxios;
