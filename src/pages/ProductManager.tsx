import React from 'react'
import { ProductType } from '../type/Product';
import { Link } from 'react-router-dom'
import { CategoryType } from '../type/Category';
import { isAuthenticate } from '../utils/localStorage';


type ProductManagerProps = {
    products: ProductType[];
    categories: CategoryType[];
    onRemoveProduct: (id: number, token: any, user: any) => void
}

const ProductManager = (props: ProductManagerProps) => {
    const { user, token } = isAuthenticate()
    return (
        <div>
            <div className="">
                <Link to={`/admin/product/add`} className="btn btn-primary">Thêm mới</Link>

            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Bài viết</th>
                        <th>Danh mục</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((item, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td>{item.categoryId}</td>
                            <td>
                                <Link to={`/admin/product/${item._id}/edit`} className="btn btn-success">Editor</Link>
                            </td>
                            <td>
                                <button onClick={() => props.onRemoveProduct(item._id, user, token)} className="btn btn-danger">Remove</button>
                            </td>

                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProductManager