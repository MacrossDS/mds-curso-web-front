import axios from "axios";
import {API_HOST} from '../config.json';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const request = {
    get: (path) => {
        const sesion = cookies.get("__STATE__").sesion || {};
        return axios.get(`${API_HOST}${path}`, {
            headers: {
                Authorization: `Bearer ${sesion.token}`
            }
        }) 
    }
} 