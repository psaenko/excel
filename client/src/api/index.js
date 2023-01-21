import axios from "axios";

let token = localStorage.getItem('token');

const withAuthConfig = {
    baseURL: `http://195.189.227.131:3000http://195.189.227.131:3000/api`,
    headers:{
        'Content-Type': 'application/json',
        withCredentials: true,
        'Authorization': 'Bearer ' + token
    }
}

export const WithAuthAPIInterface = axios.create(withAuthConfig);

const defaultConfig = {
    baseURL: `http://195.189.227.131:3000/api`,
    headers:{
        'Content-Type': 'application/json',
        'Accept': "application/json",
    },
    withCredentials: true,
}

export const DefaultAPIInterface = axios.create(defaultConfig);

