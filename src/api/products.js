import api from "./axios";

export const getProducts = async (params) => {
    return await api.get("/products", {
        params,
    });
};

export const getSingleProduct = async (id) => {
    return await api.get(`/products/${id}`);
};

export const updateProduct = async (id, data) => {
    return await api.put(`/products/${id}`, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    });
};

export const deleteProduct = async (id) => {
    return await api.delete(`/products/${id}`);
};

export const storeProduct = async (data) => {
    return await api.post("/products", data,  {
    headers: {
        "Content-Type": "multipart/form-data",
    }});
};