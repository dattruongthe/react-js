import React from "react";
import ProductRow from "./productRow";

class ProductCategoryRow extends React.Component {

    getCategories() {
        let data = this.props.data;
        let currentCategory;
        let productCategories = [];
        for (let i = 0;i < data.length;i++) {
            if(data[i].category !== currentCategory) {
                currentCategory = data[i].category;
                productCategories.push(data[i].category);
            }
        }

        return productCategories;
    }

    render() {
        let productCategories = this.getCategories();
        let productCatHtml = productCategories.map((productCategory,index) =>
            <tr key={index}>
                <td colSpan='2'>
                    <table>
                        <tbody>
                            <tr>
                                <td colSpan='2'>{productCategory}</td>
                            </tr>
                            <ProductRow data={this.props.data} category={productCategory} isInStock={this.props.isInStock} textQuery={this.props.textQuery}/>
                        </tbody>
                    </table>
                </td>
            </tr>
        );
        return (
            <table>
                <tbody>{productCatHtml}</tbody>
            </table>
        );
    }
}

export default ProductCategoryRow;