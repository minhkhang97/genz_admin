import axiosClient from "./apiClient";

export const getAllProducts = async () => {
    const url = '/products';
    const res = await axiosClient.get(url);
    console.log(res);
    console.log('asjdhasjk');
    return res;
}

export const createProduct = async (product) => {
    const url = '/products';
    const data = await axiosClient.post(url, product);
    return data;
}

export const getOneProduct =  async (idProduct) => {
    const url = `/products/${idProduct}`;
    const product = await axiosClient.get(url);
    return product;
}