import { CategoryType } from "../type/Category";
import instance from "./instance";

export const list = () => {
    const url = `/categories`;
    return instance.get(url);

}

export const add = (category: CategoryType) => {
    const url = `/categories`;
    return instance.post(url, category);
}

export const read = (id: string) => {
    const url = `/categories/${id}`;
    return instance.get(url);
}
export const remove = (id: number) => {
    const url = `/categories/${id}`;
    return instance.delete(url)
}

export const update = (category: CategoryType) => {
    const url = `/categories/${category._id}`;
    return instance.put(url, category);
}