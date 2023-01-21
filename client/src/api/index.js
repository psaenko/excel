import axios from "axios";

let token = localStorage.getItem('token');

const withAuthConfig = {
    baseURL: `https://psaenko.com.ua:3000/api`,
    headers:{
        'Content-Type': 'application/json',
        withCredentials: true,
        'Authorization': 'Bearer ' + token
    }
}

export const WithAuthAPIInterface = axios.create(withAuthConfig);

const defaultConfig = {
    baseURL: `https://psaenko.com.ua:3000/api`,
    headers:{
        'Content-Type': 'application/json',
        'Accept': "application/json",
    },
    withCredentials: true,
}

export const DefaultAPIInterface = axios.create(defaultConfig);

