import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Autosuggest from 'react-autosuggest';

import './css/product-search-box.scss';

class ProductSearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            suggestions: []
        }
    }
    getSuggestions(value) {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0
            ? []
            : this.props.products.filter(lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue);
    }
    getSuggestionValue(suggestion) {
        return suggestion.name;
    }
    renderSuggestion(suggestion) {
        return (
            <span>{suggestion.name}</span>
        );
    }

    onSuggestionsFetchRequested = ({value}) => {
        this.setState({suggestions: this.getSuggestions(value)});
    };
    onSuggestionsClearRequested = () => {
        this.setState({suggestions: []});
    };
    onChange = (event, {newValue}) => {
        this.setState({value: newValue});
    };
    onSuggestionSelected =(suggestion, suggestionValue, sectionIndex, method)=>{
      this.props.onSelected && this.props.onSelected();
    };

    render() {
        const {value, suggestions} = this.state;
        const inputProps = {
            placeholder: 'Urun giriniz',
            value,
            onChange: this.onChange
        };
        return (
            <div className="product-search-box">
                <label>Urun</label>
                <Autosuggest suggestions={suggestions} onSuggestionSelected={this.onSuggestionSelected} onSuggestionsFetchRequested={this.onSuggestionsFetchRequested} onSuggestionsClearRequested={this.onSuggestionsClearRequested} getSuggestionValue={this.getSuggestionValue} renderSuggestion={this.renderSuggestion} inputProps={inputProps}/>
            </div>
        )
    }
}

export default ProductSearchBox;
