import axios from 'axios';
const API_BASE_URL = "https://localhost:7116/api/Customer";
const API_BASE = "https://localhost:7116/api/CustomerLogin";


export const registerCustomer = async (payload) => {
    const response = await axios.post(`${API_BASE_URL}/register`, payload);
    return response.data;
};


export const loginCustomer = async (loginPayload) => {
    const response = await axios.post(`${API_BASE}/login`, loginPayload);
    console.log(response.data)
    return response.data;
};