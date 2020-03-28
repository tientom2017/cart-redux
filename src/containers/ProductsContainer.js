import React, { Component } from 'react';
import {connect} from 'react-redux';
import Products from '../components/Products';
import ProductItem from '../components/ProductItem';
import PropTypes from 'prop-types';

class ProductsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    showProducts(products){
        var result = null;
        if(products.length > 0) {
            result = products.map((val, index) => {
                return <ProductItem key={index} productInfo={val}/>
            });
        }
        return result;
    }

    render() {
        var {products} = this.props;
        return (
            <Products>
                { this.showProducts(products) }
            </Products>
        );
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = state => {
    return {
        products : state.product
    }
}
export default connect(mapStateToProps, null)(ProductsContainer);