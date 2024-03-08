import { useEffect, useState } from "react";
import tokenUtils from "../tokenUtils";

const withAuth =
  (Component, requiresAdmin = false, PermissionDeniedComponent) =>
  (props) => {
    const [token, setToken] = useState(tokenUtils.getToken());

    useEffect(() => {
      const token = tokenUtils.getToken();
      setToken(token);
    }, [tokenUtils]);

    const validateToken = () => {
      if (!token) {
        return null;
      }

      // Simula la decodificación del token (asumiendo que contiene el rol del usuario)
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      return decodedToken.role;
    };

    const role = validateToken();

    if (!token) {
      // Mostrar un componente que indique que no hay sesión iniciada
      return <NoSession />;
    }

    if (requiresAdmin && role !== "ADMIN") {
      // Mostrar el componente de permisos insuficientes
      return <PermissionDeniedComponent />;
    }

    return <Component {...props} />; // Renderizar el componente original si tiene permisos
  };

export default withAuth;
