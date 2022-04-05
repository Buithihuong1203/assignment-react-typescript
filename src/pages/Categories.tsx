import React from 'react'
import CategoryList from '../components/CategoryList'
import { CategoryType } from '../type/Category'

type CategoriesProps = {
    categories: CategoryType[]
}

const Categories = (props: CategoriesProps) => {
    return (
        <div>
            <CategoryList categories={props.categories} />
        </div>
    )
}

export default Categories