import api from "./axios";

export const login = async (data) => {
    return await api.post("/login", data);
};

export const logout = () => {
    return api.post("/logout");
};