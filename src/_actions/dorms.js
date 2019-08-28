import axios from 'axios'
import { API_URL } from 'react-native-dotenv'


export const getDorms = () => {
    return {
        type: 'GET_DORMS',
        payload: axios.get(API_URL + 'dorms')
    }
}

export const getDormDetail = (id) => {
    return {
        type: 'GET_DORMDETAIL',
        payload: axios.get(API_URL + 'dorms/' + id)
    }
}

// http://192.168.1.31:3000/api/v1/