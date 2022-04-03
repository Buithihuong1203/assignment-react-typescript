import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Inputs = {
    title: string,
    desc: string
}

type PostAddProps = {
    onAddPost: (post: Inputs) => void
}

const PostAdd = (props: PostAddProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>()
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<Inputs> = (dataInput) => {
        props.onAddPost(dataInput);
        reset(dataInput);
        navigate("/admin/post");
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="container my-8">
                <div className="mb-3 ">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" {...register('title')} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Desc</label>
                    <input type="text" className="form-control"  {...register('desc')} />
                </div>


                <button className="btn btn-primary">Thêm bài viết</button>
            </form>
        </div>
    )
}

export default PostAdd