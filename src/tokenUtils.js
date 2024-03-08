const setToken = (token) => {
  localStorage.setItem("authToken", token);
};

const getToken = () => {
  return localStorage.getItem("authToken");
};

const decodeToken = () => {
  (token) => JSON.parse(atob(token.split(".")[1]));
};

const setRol = (rol) => {
  localStorage.setItem("rol", rol);
};

const getRol = () => {
  return localStorage.getItem("rol");
};

export default { setToken, getToken, decodeToken, setRol, getRol };
