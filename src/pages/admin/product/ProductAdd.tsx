import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { listCate } from "../../../api/category";
import { CategoryType } from "../../../type/Category"


type Inputs = { // kiểu dữ liệu của từng input
    name: string,
    price: number,
    categoryId: string,
    description: string
};

type ProductAddProps = {
    onAddProduct: (product: Inputs) => void
}
const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>()
    //sử dụng hook useNavigate để chuyển sang
    const navigate = useNavigate();
    const [cate, setCate] = useState<CategoryType[]>([]);
    useEffect(() => {
        const getCategory = async () => {
            const { data } = await listCate()
            setCate(data)
        }
        getCategory()
    }, [])
    const onSubmit: SubmitHandler<Inputs> = (dataInput) => {
        // console.log(dataInput);  
        props.onAddProduct(dataInput);
        reset(dataInput);
        //chuyển trang 
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
                    <label className="form-label">Category: </label>
                    <select className="form-select" {...register('categoryId')} aria-label="Default select example">
                        {cate.map(item =>
                            <option value={item._id}>{item.name}</option>
                        )}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" {...register('description', { required: true })} className="form-control" required />
                </div>
                <button className="btn btn-primary">Thêm sản phẩm</button>
            </form>
        </div>
    )
}

export default ProductAdd