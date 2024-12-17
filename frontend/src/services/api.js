import axios from 'axios';

const api = axios.create({
    baseURL: 'https://employeebackend-5di2.onrender.com/api/employees'
});

export const addEmployee = (data) => api.post('/', data);

export const getEmployees = () => api.get('/');
