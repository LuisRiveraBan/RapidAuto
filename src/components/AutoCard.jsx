import React from "react";
import { Link } from "react-router-dom";

const AutoCard = ({ auto }) => {
  const { idAuto, modelo, marca, precio, kilometraje, img1, descripcion } =
    auto;

  return (
    <div className="auto-card">
      <div className="card-image">
        {img1 && (
          <img src={`data:image/jpeg;base64,${img1}`} alt={`${modelo} image`} />
        )}
      </div>
      <div className="mr-3">
        <h3>{modelo}</h3>
        <p>
          <strong>Marca:</strong> {marca}
        </p>
        <p>
          <strong>Precio:</strong> ${precio}
        </p>
        <p>
          <strong>Kilometraje:</strong> {kilometraje} km
        </p>
      </div>
      <div className="card-actions">
        <Link to={`/auto/listarUnAuto?${idAuto}`} state={{ auto }}>
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default AutoCard;
