import axios from 'axios';

export const getData = () => axios.get('http://localhost:4000/');
export const getDataByFilter = (filter) => axios.get(`http://localhost:4000/query?filter=${filter}`);