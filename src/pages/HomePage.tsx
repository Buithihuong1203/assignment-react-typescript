import React from 'react';
import Banner from '../components/Banner';
import CategoryList from '../components/CategoryList';
import PostList from '../components/PostList';
import ProductList from '../components/ProductList';
import { CategoryType } from '../type/Category';
import { PostType } from '../type/Post';
import { ProductType } from '../type/Product';
import Categories from './Categories';

type HomePageProps = {
    products: ProductType[];
    //categories: CategoryType[];
}

const Homepage = (props: HomePageProps) => {
    return (
        <div>
            <ProductList products={props.products} />
        </div>
    )
}

export default Homepage