import React from 'react'
import { PostType } from '../type/Post';
import { Link } from 'react-router-dom'


type PostManagerProps = {
    posts: PostType[];
    onRemovePost: (id: number) => void
    onUpdatePost: (id: number) => void
}

const PostManager = (props: PostManagerProps) => {
    return (
        <div>
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
                    {props.post.map((item, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.desc}</td>
                            <td>
                                <Link to={`/admin/post/${item._id}/edit`}>Sửa</Link>
                            </td>
                            <td>
                                <button onClick={() => props.onRemove(item._id)} className="btn btn-danger">Xóa</button>
                            </td>

                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default PostManager