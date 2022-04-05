import React from 'react'
import { Link } from 'react-router-dom';
import { PostType } from '../type/Post'

type PostListProps = {
    posts: PostType[];
}

const PostList = ({ posts }: PostListProps) => {
    return (

        <div className="card mb-3" style={{ maxWidth: 540 }}>
            <h2>FRAGRANCE</h2>
            <br />
            <div className="row g-0">
                {posts?.map((post, index) => {
                    return (
                        <div key={index}>
                            <div className="col-md-4">
                                <img src="..." className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">{post.desc}</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    <Link to={`/post/${post._id}`} className="btn btn-outline-danger " >Xem thêm</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default PostList