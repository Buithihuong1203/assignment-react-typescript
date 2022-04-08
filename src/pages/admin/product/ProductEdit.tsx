import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { ProductType } from '../../../type/Product';
import { readProduct, updateProduct } from '../../../api/product';
import React, { useEffect, useState } from 'react';
import { CategoryType } from "../../../type/Category";
import { listCate } from "../../../api/category";
import { isAuthenticate } from "../../../utils/localStorage";



type ProductEditProps = {
    onUpdateProduct: (product: ProductType, user: any, token: any) => void
}

type FormInputs = {
    name: string,
    price: number,
    category: string,
    description: string
}

const ProductEdit = (props: ProductEditProps) => {
    const [cate, setCate] = useState<CategoryType[]>([]);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
    const { id }: any = useParams();
    const { token, user } = isAuthenticate()
    const navigate = useNavigate();


    useEffect(() => {
        const getProduct = async () => {
            const { data } = await readProduct(id);
            reset(data)
        }
        getProduct();
    }, []);
    useEffect(() => {
        const getCategory = async () => {
            const { data } = await listCate();
            setCate(data)
        }
    })
    const onSubmit: SubmitHandler<FormInputs> = (data: any) => {
        //console.log(data);
        props.onUpdateProduct(data, user, token);
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
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <select className="form-select" {...register("category")}>
                        {cate.map((item, index) =>

                            <option value={item._id} key={index}>{item.name}</option>
                        )}
                    </select>
                    <input type="hidden" {...register("category")} className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" {...register("description")} className="form-control" />
                </div>

                <button className="btn btn-primary">Update</button>
            </form>
        </div>
    )
}

export default ProductEdit