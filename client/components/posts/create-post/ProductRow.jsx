import React, {Component} from 'react';
import {connect} from 'react-redux'
import Autosuggest from 'react-autosuggest';

import './css/product-row.scss';

class ProductRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            suggestions: [],
            selectedProductCode: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
        this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
        this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
    }
    onChange(event, {newValue}) {
        this.setState({value: newValue});
    }

    getSuggestions(value) {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        const {products} = this.props;

        return inputLength === 0
            ? []
            : products.filter(prod => prod.name.toLowerCase().slice(0, inputLength) === inputValue);
    }
    onSuggestionSelected(event, {suggestion, suggestionValue, sectionIndex, method}) {
        this.setState({selectedProductCode: suggestion.code});
    }

    onSuggestionsFetchRequested({value}) {
        this.setState({suggestions: this.getSuggestions(value)});
    }

    onSuggestionsClearRequested() {
        this.setState({suggestions: []});
    }

    render() {
        const {value, suggestions} = this.state;
        const getSuggestionValue = suggestion => {
            return `${suggestion.name}`;
        }
        const renderSuggestion = suggestion => {
            return (
                <span>
                    {suggestion.name}
                </span>
            );
        }
        const inputProps = {
            placeholder: "Bir urun giriniz",
            value,
            onChange: this.onChange
        }
        const showContent = (this.state.selectedProductCode !== '')
            ? true
            : false;

        return (
            <div className="product-row">
                <div className="search-container">
                    <label className="label">Urun</label>
                    <Autosuggest onSuggestionsFetchRequested={this.onSuggestionsFetchRequested} onSuggestionsClearRequested={this.onSuggestionsClearRequested} onSuggestionSelected={this.onSuggestionSelected} suggestions={suggestions} getSuggestionValue={getSuggestionValue} renderSuggestion={renderSuggestion} inputProps={inputProps}/>
                </div>
                <div className={showContent
                    ? ' primary-settings '
                    : ' primary-settings  hidden'}>
                    <div className="primary-setting-price">
                        <label className="label">Fiyat</label>
                        <input className="primary-setting-price-input"/>
                    </div>
                    <div className="primary-setting-divider">
                      /
                    </div>
                    <div className="primary-setting-unit">
                        <label className="label">Birim</label>
                        <select>
                          <option>xxx</option>
                          <option>yyy</option>
                        </select>
                    </div>
                </div>
                <div className="submit button">
                  <button>Submit</button>
                </div>
            </div>
        );
    }
}

export default connect(null, null)(ProductRow);
