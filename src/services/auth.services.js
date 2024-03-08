import axios from "axios";

const register = (
  nombre,
  apellido_paterno,
  apellido_materno,
  correo_electronico,
  contraseña,
  celular,
  pais,
  estado,
  username,
) => {
  return axios.post(API_URL + "signup", {
    nombre,
    apellido_paterno,
    apellido_materno,
    correo_electronico,
    contraseña,
    celular,
    pais,
    estado,
    username,
  });
};
