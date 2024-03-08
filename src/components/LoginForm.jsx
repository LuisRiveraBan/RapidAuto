import { useState } from "react";
import axiosInstance from "../axiosConfig";
import tokenUtils from "../tokenUtils";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Deshabilitar el botón mientras se procesa la solicitud
    const button = e.target.querySelector("button");
    button.disabled = true;

    // Validar email y contraseña

    if (!username || !contrasena) {
      setErrorMessage("Por favor, ingresa tu usuario y contraseña.");
      button.disabled = false;
      return;
    }

    // Configurar la solicitud Axios
    const request = {
      username,
      contrasena,
    };

    try {
      // Enviar la solicitud
      const response = await axiosInstance.post("/login", request);

      // Almacenar el token
      tokenUtils.setToken(response.data.token);

      // Store user data in localStorage
      localStorage.setItem("user", JSON.stringify(response.data.Username));

      // Redirigir al usuario
      window.location.href = "/";

      console.log(response.data);
    } catch (error) {
      // Mostrar un mensaje de error
      setErrorMessage(error.response.data.message);
      button.disabled = false;
    }
  };

  return (
    <>
      <div className="flex h-96 items-center justify-center bg-white py-5">
        <form
          onSubmit={handleLogin}
          className="w-full rounded bg-slate-100 px-8 py-5 shadow-md md:w-1/3"
        >
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block w-full rounded-md border  px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            className="mt-4 block w-full rounded-md border  px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="mt-4 block w-full rounded-md bg-blue-500 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            Iniciar sesión
          </button>
          {errorMessage && (
            <p className="error-message mt-2 text-center text-red-500">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default LoginForm;
