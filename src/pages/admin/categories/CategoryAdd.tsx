import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CategoryType } from '../../../type/Category'
import { isAuthenticate } from '../../../utils/localStorage'

type CategoryAddProps = {
    onAddCate: (category: FormInput, user: any, token: any) => void
}
type FormInput = {
    name: string
}

const CategoryAdd = (props: CategoryAddProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInput>()
    const navigate = useNavigate();
    const { user, token } = isAuthenticate()
    const onSubmit: SubmitHandler<FormInput> = (data: any) => {
        props.onAddCate(data, user, token);
        reset(data);
        navigate('/admin/category');

    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="container my-8">
                <div className="mb-3 ">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" {...register('name')} />
                </div>
                <button className="btn btn-primary">Thêm danh mục</button>
            </form>
        </div>
    )
}

export default CategoryAdd