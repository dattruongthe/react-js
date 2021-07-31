import React from 'react';
import FeatureProducts from "./featureProducts";

class MainContent extends React.Component {
    render() {
        return (
            <div className={'mainContent'}>
                <FeatureProducts />
            </div>
        );
    }
}

export default MainContent;