import {ActionType} from './../actions/products-action';

const products = (state = [], action) => {
    switch (action.type) {
        case ActionType.GET_PRODUCTS:
            return action.payload.data;
        default:
            return state;
    }
}

export default products;
