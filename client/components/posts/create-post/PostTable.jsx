import React, {Component} from 'react';
import {connect} from 'react-redux'

import ProductRow from './ProductRow';

import {getProducts} from './../../../actions/products-action';

import './css/post-table.scss';

class PostTable extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if (this.props.products.length == 0) {
            this.props.getProducts();
        }
    }
    render() {

      const {products} = this.props;
        return (
            <div className="post-table">
              <ProductRow products={this.props.products}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({products: state.products});

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => {
            dispatch(getProducts())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostTable);
