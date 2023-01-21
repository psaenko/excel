import axios from "axios";

let token = localStorage.getItem('token');

const withAuthConfig = {
    baseURL: `http://localhost:3000/api`,
    headers:{
        'Content-Type': 'application/json',
        withCredentials: true,
        'Authorization': 'Bearer ' + token
    }
}

export const WithAuthAPIInterface = axios.create(withAuthConfig);

const defaultConfig = {
    baseURL: `http://localhost:3000/api`,
    headers:{
        'Content-Type': 'application/json',
        'Accept': "application/json",
    },
    withCredentials: true,
}

export const DefaultAPIInterface = axios.create(defaultConfig);

