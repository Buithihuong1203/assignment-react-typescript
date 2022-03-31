import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { read } from '../api/product';
import { ProductType } from '../type/Product';



const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<ProductType>();
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            setProduct(data)
        }
        getProduct();
    }, [id])
    return (
        <div className="row">
            <div className="col-6">
                <img src={``} />

            </div>
            <div className="col-6">
                <h1>{product?.name}</h1>
                <p>{product?.price}</p>
                <button>Mua ngay</button>
            </div>
        </div>
    )
}

export default ProductDetail