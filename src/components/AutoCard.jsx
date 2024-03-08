import React from "react";
import { Link } from "react-router-dom";

const AutoCard = ({ auto }) => {
  const { idAuto, modelo, marca, precio, kilometraje, img, descripcion } = auto;

  return (
    <div className="card">
      <div className="card-image">
        {img && (
          <img src={`data:image/jpeg;base64,${img}`} alt={`${modelo} image`} />
        )}
      </div>
      <div className="card-content">
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
        <p>
          <strong>Descripción:</strong> {descripcion}
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
