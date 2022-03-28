import React from 'react';
import Banner from '../components/Banner';
import ProductList from '../components/ProductList';
import { ProductType } from '../type/Product';

type HomePageProps = {
    products: ProductType[];
}

const Homepage = (props: HomePageProps) => {
    return (
        <div>
            <Banner />
            <ProductList products={props.products} />
        </div>
    )
}

export default Homepage