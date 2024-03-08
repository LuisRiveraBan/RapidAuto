import { Link } from "react-router-dom";

const PermissionDeniedComponent = () => {
  return (
    <div>
      <h1>Permisos insuficientes</h1>
      <p>No tienes los permisos necesarios para acceder a esta página.</p>
      <p>
        <Link to="/">Volver a la página principal</Link>
      </p>
    </div>
  );
};

export default PermissionDeniedComponent;
