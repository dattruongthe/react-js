import React from "react";
import SearchResult from "./searchResult";

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textQuery: '',
            isInStock: false,
            result: []
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleStockStatusChange = this.handleStockStatusChange.bind(this);
    }
    handleTextChange(event) {
        this.setState({textQuery:event.target.value})
    }
    handleStockStatusChange(event) {
        this.setState({isInStock: event.target.checked});
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Search: </label>
                    <input type="text" value={this.state.textQuery} onChange={this.handleTextChange} />
                    <div className={'stockStatus'}>
                        <label htmlFor='isInStock'>Show in stock product only: </label>
                        <input id='isInStock' name="isInStock" type="checkbox" checked={this.state.isInStock} onChange={this.handleStockStatusChange} />
                    </div>
                </form>
                <fieldset>
                    <legend>Result</legend>
                    <SearchResult data={this.props.data} isInStock={this.state.isInStock} textQuery={this.state.textQuery} />
                </fieldset>
            </div>
        );
    }
}

export default SearchForm;