import React from 'react';
import SearchForm from "./searchForm";

class ProductSearch extends React.Component {
    render() {
        return (
            <fieldset className={'productSearch'}>
                <legend>Product search</legend>
                <SearchForm data={this.props.data} />
            </fieldset>
        )
    }
}

export default ProductSearch;