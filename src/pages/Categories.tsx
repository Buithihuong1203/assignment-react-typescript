import React from 'react'
import CategoryList from '../components/CategoryList'
import { CategoryType } from '../type/Category'

type CategoryProps = {
    categories: CategoryType[]
}

const Categories = (props: CategoryProps) => {
    return (
        <div>
            <CategoryList categories={props.categories} />
        </div>
    )
}

export default Categories