import { PostType } from "../type/Post";
import instance from "./instance";

export const list = () => {
    const url = `/posts`;
    return instance.get(url);

}

export const add = (post: PostType) => {
    const url = `/posts`;
    return instance.post(url, post);
}
export const read = (id: string | undefined) => {
    const url = `/posts/${id}`;
    return instance.get(url);

}
export const update = (post: PostType) => {
    const url = `/posts/${post._id}`;
    return instance.put(url, post);
}
export const remove = (id: number) => {
    const url = `/posts/${id}`;
    return instance.delete(url);
}