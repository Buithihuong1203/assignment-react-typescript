import React from 'react'
import { PostType } from '../type/Post';
import { Link } from 'react-router-dom'


type PostManagerProps = {
    posts: PostType[];
    onRemovePost: (id: number) => void
}

const PostManager = (props: PostManagerProps) => {
    return (
        <div>
            <div className="">
                <Link to={`/admin/post/add`} className="btn btn-primary">Thêm mới</Link>
            </div>
            <br />
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tiêu đề</th>
                        <th>Bài viết</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.posts.map((item, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.desc}</td>
                            <td>
                                <Link to={`/admin/post/${item._id}/edit`} className="btn btn-success">Sửa</Link>
                            </td>
                            <td>
                                <button onClick={() => props.onRemovePost(item._id)} className="btn btn-danger">Xóa</button>
                            </td>

                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default PostManager