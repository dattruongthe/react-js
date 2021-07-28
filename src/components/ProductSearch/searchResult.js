import React from "react";
import ProductCategoryRow from "./productCategoryRow";

class SearchResult extends React.Component {
    render() {
        return (
            <table className={'searchResult'}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan='2'><ProductCategoryRow data={this.props.data} isInStock={this.props.isInStock} textQuery={this.props.textQuery} /></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default SearchResult;