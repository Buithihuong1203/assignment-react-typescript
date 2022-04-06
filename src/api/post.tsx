import { PostType } from "../type/Post";
import instance from "./instance";

export const listPost = () => {
    const url = `/posts`;
    return instance.get(url);

}

export const addPost = (post: PostType) => {
    const url = `/posts`;
    return instance.post(url, post);
}
export const readPost = (id: string | undefined) => {
    const url = `/posts/${id}`;
    return instance.get(url);

}
export const updatePost = (post: PostType) => {
    const url = `/posts/${post._id}`;
    return instance.put(url, post);
}
export const removePost = (id: number) => {
    const url = `/posts/${id}`;
    return instance.delete(url);
}