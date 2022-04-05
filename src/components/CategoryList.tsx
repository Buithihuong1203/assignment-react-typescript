import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import { CategoryType } from "../type/Category";

type CategoryListProps = {
    categories: CategoryType[];
}



const CategoryList = ({ categories }: CategoryListProps) => {

    //const [categories, setCategories] = useState<CategoryType[]>();
    //useEffect(() => {
    //    const getCategory = async () => {
    //        const { data } = await
    //            setCategories(data);
    //    };
    //}, []);
    return (
        <div className="my-3 container my-5">
            <h2 className='my-3 text-center'>BRANDS</h2>
            <br />
            <div className="row" >
                {categories?.map((category, index) => {
                    return (

                        <div className="col-3" key={index}>
                            <div className="card"  >
                                <img src="http://u639672.webmienphi.vn/files/sanpham/18/300_1/jpg/acqua-di-parma.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title text-center">{category.name}</h5>
                                    <Link to={`/category/${category._id}`} className="btn btn-outline-danger">Xem thêm</Link>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default CategoryList

