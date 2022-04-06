import { CategoryType } from "../type/Category";
import instance from "./instance";

export const listCate = () => {
    const url = `/category`;
    return instance.get(url);

}

export const addCate = (category: CategoryType, user: any, token: any) => {
    const url = `/categories/${user._id}`;
    return instance.post(url, category, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}

export const readCate = (id: number) => {
    const url = `/category/${id}`;
    return instance.get(url);
}
export const removeCate = (id: number, user: any, token: any) => {
    const url = `/categories/${id}/${user._id}`;
    return instance.delete(url, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}

export const updateCate = (category: CategoryType, user: any, token: any) => {
    const url = `/categories/${category._id}/${user._id}`;
    return instance.put(url, category, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}