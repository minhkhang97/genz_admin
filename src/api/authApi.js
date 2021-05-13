import axiosClient from "./apiClient";

export const login = async (email, password) => {
    const url = '/auth/admin/login';
    const res = await axiosClient.post(url, {email, password});
    return res;
}

//get user

export const getUser = async () => {
    const url = '/auth/admin/user';
    const res = await axiosClient.get(url);
    return res;
}