import api from "./axios";

export const getProducts = async (data) => {
    return await api.get("/products", data);
};