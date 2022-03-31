import React from 'react'
import { Link } from 'react-router-dom';
import { ProductType } from '../type/Product'


type ProductListProps = {
    products: ProductType[];
}

const ProductList = ({ products }: ProductListProps) => {
    return (
        <div className="my-3 container my-5">
            <h2 className='my-3'>Sản phẩm mới nhất</h2>
            <br />
            <div className="row" >
                {products?.map((product, index) => {
                    return (

                        <div className="col-3" key={index}>
                            <div className="card"  >
                                <img src="http://u639672.webmienphi.vn/files/sanpham/18/300_1/jpg/acqua-di-parma.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <span className="block">{product.price}</span>
                                    <Link to={`/product/${product._id}`} className="btn btn-primary">Quick View</Link>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default ProductList