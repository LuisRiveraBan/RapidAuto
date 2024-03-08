import axiosInstance from "../axiosConfig";
import tokenUtils from "../tokenUtils";

export const fetchUserData = async () => {
  const response = await axiosInstance.get("/usuario/buscar/usuario");
  const usuario = response.data.data;
  const rol = usuario.idRol.descripcion;
  tokenUtils.setRol(rol);
};
