import React from 'react';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import Footer from '../../components/Footer';



type Props = {}

const WebsiteLayout = (props: Props) => {
    return (
        <div>
            <Header />
            <Banner />
            <ProductList />
            <Footer />

        </div>
    )
}

export default WebsiteLayout