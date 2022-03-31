import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { ProductType } from '../type/Product';
import { read, update } from '../api/product';
import React, { useEffect, useState } from 'react';


type ProductEditProps = {
    onUpdate: (product: ProductType) => void
}

type FormInputs = {
    name: string,
    price: number
}

const ProductEdit = (props: ProductEditProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data)
        }
        getProduct();
    }, []);
    const onSubmit: SubmitHandler<FormInputs> = data => {
        //console.log(data);
        props.onUpdate(data);
        navigate("/admin/product");
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="container my-8">
                <div className="mb-3 ">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" {...register('name')} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="number" className="form-control"  {...register('price')} />
                </div>
                <button className="btn btn-primary">Update</button>
            </form>
        </div>
    )
}

export default ProductEdit