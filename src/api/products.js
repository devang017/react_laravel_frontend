import api from "./axios";

export const getProducts = async (data) => {
    return await api.get("/products", data);
};

export const storeProduct = async (data) => {
    return await api.post("/products", data,  {
    headers: {
        "Content-Type": "multipart/form-data",
    }});
};