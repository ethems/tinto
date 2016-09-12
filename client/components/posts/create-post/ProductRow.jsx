import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux'
import {Textfit} from 'react-textfit';

import ProductSearchBox from './ProductSearchBox';

import './css/product-row.scss';

class ProductRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProductCode: "aa",
            descriptionActive: false,
            viewMode: false
        };
        this.handleSelected = this.handleSelected.bind(this);
    }

    handleSelected(selectedProductCode) {
        console.log('selected');
        //this.setState({selectedProductCode});
    }
    _renderSearchContainer(products) {
        return (
            <div className={`search-container`}>
                <ProductSearchBox products={products} onSelected={this.handleSelected}/>
            </div>
        )
    }
    _renderEditContainer() {
        const {descriptionActive} = this.state;
        return (
            <div className={`edit-container`}>
                <div className="header">
                    <div>
                        <i className="material-icons pointer">close</i>
                    </div>
                    <div className="product-name">Domates</div>
                </div>
                <div className="sale-container">
                    <div className="price-unit">
                        <div className="price">
                            <div className="ui  big labeled input">
                                <div className="ui label">
                                    &#8378;
                                </div>
                                <input type="text" placeholder="Fiyat"/>
                            </div>
                        </div>
                        <div></div>
                        <div className="unit">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
    _renderViewContainer() {
        return (
            <div className={`view-container`}>
                <div className="price-unit-container mdl-color--light-green-500">
                    <div className="price">
                        <Textfit mode="single" perfectFit={true}>
                            &#8378;3.00
                        </Textfit>
                        <div className="unit">
                            / kasa
                        </div>
                    </div>
                </div>
                <div className="information-section">information</div>
            </div>
        )
    }
    render() {
        const hasProductSelected = !!(this.state.selectedProductCode);
        const {viewMode} = this.state;
        const {products} = this.props;

        return (
            <div className="product-row ui form mdl-color--white mdl-shadow--2dp">
                {!hasProductSelected
                    ? this._renderSearchContainer(products)
                    : viewMode
                        ? this._renderViewContainer()
                        : this._renderEditContainer()}
            </div>
        )
    }
}

export default ProductRow;
