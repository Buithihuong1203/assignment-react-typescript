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
            <div className="col-6 my-8">
                <img src="..." className="card-img-top" alt="..." />

            </div>
            <div className="col-6">
                <h3>Tên sản phẩm : {product?.name}</h3>
                <p>Giá sản phẩm: {product?.price}</p>
                <p>{product?.desc}</p>

                <div className=" ">
                    <button className="btn btn-primary " type="button">Mua ngay</button>
                </div>

            </div>
        </div>
    )
}

export default ProductDetail