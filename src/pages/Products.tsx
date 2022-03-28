import React from 'react'
import ProductList from '../components/ProductList'
import { ProductType } from '../type/Product'

type ProductsProps = {
    products: ProductType[]
}

const Products = (props: ProductsProps) => {
    return (
        <div>
            <ProductList products={props.products} />
        </div>
    )
}

export default Products