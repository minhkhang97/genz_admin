import axiosClient from "./apiClient";

export const getAllCategories = async () => {
    const url = '/admin/categories';
    const categories = await axiosClient.get(url);
    return categories;
}