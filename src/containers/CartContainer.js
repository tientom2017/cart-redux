import React, { Component } from 'react';
import {connect} from 'react-redux';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartTotal from '../components/CartTotal';
import * as Message from '../constants/Message'

class CartContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderCartItem(cart){
        var result = Message.MSG_CART_EMPTY;
        if(cart && cart.length > 0) {
            result = cart.map((val, index) => {
                return <CartItem productInfo={val} key={index} />
            })
        }
        return result;
    }

    renderCartResult(cart){
        return <CartTotal cartInfo={cart} />
    }

    render() {
        var {cart} = this.props;
        return (
            <Cart>
                {this.renderCartItem(cart)}
                {this.renderCartResult(cart)}
            </Cart>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(CartContainer);