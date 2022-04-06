import React from 'react'
import { Link } from 'react-router-dom';
import { CategoryType } from '../type/Category'

type CategoryManagerProps = {
    categories: CategoryType[];
    onRemoveCategory: (id: number) => void
    onUpdateCategory: (id: number) => void
}

const CategoryManager = (props: CategoryManagerProps) => {
    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Danh mục sản phẩm</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.categories.map((item, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>
                                <Link to={`/admin/post/${item._id}/edit`} className="btn btn-success">Editor</Link>
                            </td>
                            <td>
                                <button onClick={() => props.onRemoveCategory(item._id)} className="btn btn-danger">Remove</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CategoryManager