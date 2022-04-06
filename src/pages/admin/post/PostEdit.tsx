import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { PostType } from '../../../type/Post';
import { readPost, updatePost } from '../../../api/post';
import React, { useEffect, useState } from 'react';


type PostEditProps = {
    onUpdatePost: (post: PostType) => void
}

type FormInputs = {
    title: string,
    desc: string
}

const PostEdit = (props: PostEditProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        const getPost = async () => {
            const { data } = await readPost(id);
            reset(data)
        }
        getPost();
    }, []);
    const onSubmit: SubmitHandler<FormInputs> = data => {
        //console.log(data);
        props.onUpdatePost(data);
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
                <button className="btn btn-primary">Update</button>
            </form>
        </div>
    )
}

export default PostEdit