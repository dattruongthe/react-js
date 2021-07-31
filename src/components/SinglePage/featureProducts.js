import React from 'react';
import {ThemeContext} from "./themeContext";

const products = [
    {id: 1, name: 'Shirt', price: 10.5},
    {id: 2, name: 'Phone', price: 20.6},
    {id: 3, name: 'Toy', price: 10.22},
]

class FeatureProducts extends React.Component {
    render() {
        let theme = this.context;
        return (
            <div className={'featureProduct'}>
                <h2>Feature Products</h2>
                <ul className={'featureProductList '+theme.theme.className}>
                    {products.map((product) => (
                        <li key={product.id}>
                            <div className={'productInfo'}>
                                <h3>{product.name}</h3>
                                <p className={'productPrice'}>{product.price}</p>
                                <button className={'addToCart '+theme.theme.className}>Add to cart</button>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        );
    }
}

FeatureProducts.contextType = ThemeContext;

export default FeatureProducts;