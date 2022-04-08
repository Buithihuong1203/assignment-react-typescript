import { CategoryType } from "../type/Category";
import { isAuthenticate } from "../utils/localStorage";
import instance from "./instance";
const { token, user } = isAuthenticate();

export const listCate = () => {
    const url = `/category`;
    return instance.get(url);

}

export const addCate = (category: CategoryType, user: any, token: any) => {
    const url = `/category/${user._id}`;
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
    const url = `/category/${id}/${user._id}`;
    return instance.delete(url, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}

export const updateCate = (category: CategoryType, user: any, token: any) => {
    const url = `/category/${category._id}/${user._id}`;
    return instance.put(url, category, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}