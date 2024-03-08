import "./App.css";
import Footer from "./shared/footer/Footer.jsx";
import Navbar from "./shared/navbar/Navbar.jsx";
import AdminSidebar from "./shared/navbar/AdminSidebar.jsx";
import { useEffect, useState } from "react";
import tokenUtils from "./tokenUtils.js";
import axiosInstance from "./axiosConfig.js";
import PublicRoutes from "./routers/PublicRoutes.jsx";
import AdminRoutes from "./routers/AdminRoutes.jsx";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState(null); // Add error state for handling

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get("/usuario/Buscar/Usuario");
        const usuario = response.data.data;
        const rol = usuario.idRol.descripcion;
        // Store user data in localStorage
        tokenUtils.setRol(rol);
        setIsAdmin(rol === "ADMIN");
      } catch (error) {
        setError(error); // Set error state for display
        console.error("Error fetching user role:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      {!isAdmin ? (
        <>
          <Navbar />
          <PublicRoutes />
          <Footer />
        </>
      ) : (
        <>
          <div className="flex">
            <AdminSidebar />
            <AdminRoutes />
          </div>
        </>
      )}
    </>
  );
}

export default App;
