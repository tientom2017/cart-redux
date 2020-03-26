import React, { Component } from 'react';
import ProductItem from './ProductItem';
import {connect} from 'react-redux';
class Products extends Component {
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
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    {
                        this.showProducts(products)
                    }
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        products : state.product
    }
}
export default connect(mapStateToProps, null)(Products);