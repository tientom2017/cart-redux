var initialState = [
    {
        id: 1,
        name: 'Iphone 7',
        image: '',
        description: 'Sản phẩm Apple',
        price: 500,
        inventory: 40,
        rating: 3
    },
    {
        id: 2,
        name: 'Galaxy Note 8',
        image: '',
        description: 'Sản phẩm Samsung',
        price: 700,
        inventory: 10,
        rating: 5
    },
    {
        id: 1,
        name: 'Sony Experia Z1',
        image: '',
        description: 'Sản phẩm Sony',
        price: 400,
        inventory: 16,
        rating: 2
    },
]

const product = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
}

export default product;