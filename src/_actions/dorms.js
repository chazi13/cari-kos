import axios from 'axios'
import { API_URL } from 'react-native-dotenv'


export const getDorms = () => {
    return {
        type: 'GET_DORMS',
        payload: axios.get(`${API_URL}dorms`)
    }
}

// http://192.168.1.31:3000/api/v1/