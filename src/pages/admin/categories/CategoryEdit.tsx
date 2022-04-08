import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { readCate } from '../../../api/category'
import { CategoryType } from '../../../type/Category'
import { isAuthenticate } from '../../../utils/localStorage'

type UpdateCategoryProps = {
    onEditCate: (category: CategoryType, user: any, token: any) => void
}
type FormInput = {
    name: string
}
const CategoryEdit = (props: UpdateCategoryProps) => {
    const navigate = useNavigate()
    const { id }: any = useParams();
    const { register, handleSubmit, reset } = useForm<FormInput>();

    useEffect(() => {
        const getCategory = async () => {
            const { data } = await readCate(id);
            reset(data)
        }
        getCategory()
    }, [])
    const { user, token } = isAuthenticate()
    const onUpdateCate: SubmitHandler<FormInput> = (data: any) => {
        props.onEditCate(data, user, token);
        navigate("/admin/category");
    }
    return (
        <div><form onSubmit={handleSubmit(onUpdateCate)}>
            <div className="mb-3">
                <label className="form-label">Name Category</label>
                <input type="text" {...register("name")} className="form-control" />
            </div>
            <button className="btn btn-primary">Cập nhật</button>
        </form></div>
    )
}

export default CategoryEdit