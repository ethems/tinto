import axios from 'axios';
import {browserHistory} from 'react-router';


export const ActionType = {
    GET_PRODUCTS: 'GET_PRODUCTS'
}

export function getProducts(){
    const request=axios.get(`/api/products`);
    return {
      type:ActionType.GET_PRODUCTS,
      payload:request
    }
}
