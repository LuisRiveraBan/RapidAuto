import { Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import AdminRoutes from "./AdminRoutes";
import tokenUtils from "../tokenUtils";
import axiosInstance from "../axiosConfig"; // Import Axios instance
import { useEffect, useState } from "react";

export const Routers = () => {
  const [token, setToken] = useState(tokenUtils.getToken());
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState(null); // Add error state for handling

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get("/usuario/buscar/usuario");
        const usuario = response.data.data;
        const rol = usuario.idRol.descripcion;
        // Store user data in localStorage
        tokenUtils.setRol(rol);
        setIsAdmin(rol === "ADMIN"); // Set isAdmin based on rol
      } catch (error) {
        setError(error); // Set error state for display
        console.error("Error fetching user role:", error);
      }
    };

    fetchUserData();
  }, [tokenUtils.getToken, axiosInstance]); // Dependencies for re-fetching

  return (
    <div>
      {token ? isAdmin ? <AdminRoutes /> : <PublicRoutes /> : <PublicRoutes />}
    </div>
  );
};
