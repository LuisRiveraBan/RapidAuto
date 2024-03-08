import { useState, useEffect } from "react";
import AutoCard from "./AutoCard";
import axiosInstance from "../axiosConfig";
import { Link } from "react-router-dom";

const ListAutos = () => {
  const [autos, setAutos] = useState([]); // Initialize as an empty array
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get("/auto/Filtro/Disponible");
        // Acceder a la propiedad "data" dentro del objeto response
        const autosData = response.data.data;

        setAutos(autosData);
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
        <p>Cargando autos disponibles...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : autos.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {autos.map((auto) => (
            <Link
              key={auto.id}
              to={`/auto/listarUnAuto?${auto.idAuto}`}
              state={{ auto }}
            >
              <AutoCard auto={auto} />
            </Link>
          ))}
        </div>
      ) : (
        <p>No se han encontrado autos disponibles.</p>
      )}
    </>
  );
};

export default ListAutos;
