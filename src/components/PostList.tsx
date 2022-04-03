import React from 'react'

type Props = {}

const PostList = (props: Props) => {
    return (
        <div> <div className="card mb-3" style={{ maxWidth: 540 }} key={index}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://www.thegioinuochoa.com.vn/uploads/news/2022/03/thumb/1647337976.1749.jpg" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{category.name}</h5>
                        <p className="card-text">{category.}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default PostList