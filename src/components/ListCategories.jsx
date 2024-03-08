import { useState, useEffect } from "react";
import axiosInstance from "../axiosConfig";
import CategoriaCard from "./CategoriaCard";
import "../App";

const ListCategories = () => {
  const [categorias, setCategorias] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/categoria");
        const categoriasData = response.data.data;

        const categorias = categoriasData.map((categoria) => ({
          id: categoria.idCategoria,
          descripcion: categoria.descripcion || "Sin descripción",
          imagen: categoria.img
            ? URL.createObjectURL(new Blob([categoria.img]))
            : null,
        }));

        setCategorias(categorias);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Cargando categorías...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : categorias.length > 0 ? (
        <div className="flex flex-row flex-wrap">
          {categorias.map((categoria) => (
            <CategoriaCard key={categoria.id} categoria={categoria} />
          ))}
        </div>
      ) : (
        <p>No se han encontrado categorías.</p>
      )}
    </>
  );
};

export default ListCategories;
