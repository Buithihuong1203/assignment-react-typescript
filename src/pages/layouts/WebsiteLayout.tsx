import React from 'react';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';



type Props = {}

const WebsiteLayout = (props: Props) => {
    return (
        <div>
            <Header />
            <Banner />
            <ProductList />
        </div>
    )
}

export default WebsiteLayout