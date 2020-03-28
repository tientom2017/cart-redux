import * as types from '../constants/ActionTypes';

export const addToCart = (product, qty) => {
    return {
        type: types.ADD_TO_CART,
        product,
        qty
    }
}