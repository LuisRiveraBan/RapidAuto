import { useState, useEffect } from "react";
import axiosInstance from "../axiosConfig";

export const RegistrationForm = () => {
  const [nombre, setNombre] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [celular, setCelular] = useState("");
  const [pais, setPais] = useState("");
  const [username, setUsername] = useState("");
  const [correo, setCorreo] = useState("");
  const [imagen, setImagen] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    const button = e.target.querySelector("button");
    button.disabled = true;

    const request = {
      nombre,
      username,
      contrasena,
      correo,
      apellido_Paterno,
      apellidoMaterno,
      celular,
      pais,
    };

    const response = await axiosInstance.post("/Registrar/Usuario", request);
    console.log(response);
  };

  return (
    <>
      <div className="flex h-2/3 items-center justify-center bg-white">
        <form
          encType="multipart/form-data"
          onSubmit={handleRegister}
          className="w-full rounded bg-slate-100 px-8 py-5 shadow-md md:w-1/3"
        >
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="block w-full rounded-md border  px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            className="mt-4 block w-full rounded-md border  px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Apellido paterno"
            value={apellido_Paterno}
            onChange={(e) => setApellidoPaterno(e.target.value)}
            className="mt-4 block w-full rounded-md border  px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Apellido materno"
            value={apellidoMaterno}
            onChange={(e) => setApellidoMaterno(e.target.value)}
            className="mt-4 block w-full rounded-md border  px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />

          <input
            type="tel"
            placeholder="Celular"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
            className="mt-4 block w-full rounded-md border  px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Pais"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
            className="mt-4 block w-full rounded-md border  px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-4 block w-full rounded-md border  px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImagen(e.target.files[0])}
            className="mt-4 block w-full rounded-md border  px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="mt-4 block w-full rounded-md bg-blue-500 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            Registrarse
          </button>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
