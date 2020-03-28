import * as types from '../constants/ActionTypes'
var data = JSON.parse(localStorage.getItem('CART'));

var initialState = [
    {
        product: {
            id: 1,
            name: 'Iphone 7',
            image: '',
            description: 'Sản phẩm Apple',
            price: 500,
            inventory: 40,
            rating: 3
        },
        qty: 5
    },
    {
        product: {
            id: 2,
            name: 'Sony Experia Z1',
            image: '',
            description: 'Sản phẩm Sony',
            price: 400,
            inventory: 16,
            rating: 2
        },
        qty: 3
    }
];

const cart = (state = initialState, action) => {
    switch(action.type) {
        case(types.ADD_TO_CART):
            return [...state];
        default: return [...state];
    }
}

export default cart;