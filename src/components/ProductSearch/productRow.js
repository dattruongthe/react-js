import React from "react";

class ProductRow extends React.Component {
    getProducts() {
        let data = this.props.data;
        let currentCategory = this.props.category;
        let products = [];
        for (let i = 0;i < data.length;i++) {
            if(data[i].category === currentCategory) {
                let query = this.props.textQuery.toLowerCase();
                let matchedQuery = data[i].name.toLowerCase().indexOf(query);
                if( (this.props.isInStock && !data[i].stocked)
                    || (query !== '' && matchedQuery === -1)
                ) {
                    continue;
                }
                products.push(data[i]);
            }
        }

        return products;
    }

    render() {
        let products = this.getProducts();
        return products.map((product,index) =>
            <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}

export default ProductRow;