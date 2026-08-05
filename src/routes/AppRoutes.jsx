import { Routes, Route } from "react-router-dom";

import Welcome from "../pages/Welcome";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import ProductIndex  from "../pages/products/Index";
import ProductCreate  from "../pages/products/Create";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* Protected Route */}
            <Route element={<ProtectedRoute />}>

                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/products/index" element={<ProductIndex />} />
                <Route path="/products/create" element={<ProductCreate />} />

            </Route>
        </Routes>
    );
}

export default AppRoutes;