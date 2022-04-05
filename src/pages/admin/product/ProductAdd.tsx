import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Inputs = { // kiểu dữ liệu của từng input
    name: string,
    price: number
};

type ProductAddProps = {
    onAdd: (product: Inputs) => void
}
const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>()
    //sử dụng hook useNavigate để chuyển sang
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<Inputs> = (dataInput) => {
        // console.log(dataInput);  
        props.onAdd(dataInput);
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
                <button className="btn btn-primary">Thêm sản phẩm</button>
            </form>
        </div>
    )
}

export default ProductAdd