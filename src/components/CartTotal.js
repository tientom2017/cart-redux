import React, { Component } from 'react';
class CartTotal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderTotalPrice(cartInfo) {
        var totalPrice = 0;
        if (cartInfo.length > 0) {
            for (let i = 0; i < cartInfo.length; i++) {
                totalPrice += (cartInfo[i].product.price * cartInfo[i].qty);
            }
        }
        return totalPrice;
    };

    render() {
        var { cartInfo } = this.props;
        return (
            <tr>
                <td colSpan={3} />
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{this.renderTotalPrice(cartInfo)}$</strong>
                    </h4>
                </td>
                <td colSpan={3}>
                    <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase<i className="fa fa-angle-right right" /></button>
                </td>
            </tr>
        );
    }
}

export default CartTotal;