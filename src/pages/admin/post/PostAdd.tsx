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
        <div>PostAdd</div>
    )
}

export default PostAdd