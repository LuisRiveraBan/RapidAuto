import { Route, Routes } from "react-router-dom";
import Index from "../admin/Index";
import ListadoAutos from "../admin/ListadoAutos";
import LoginForm from "../components/LoginForm";
import ListadoCategorias from "../admin/ListadoCategorias";
import ListadoUsuarios from "../admin/ListadoUsuarios";
import ListadoVentas from "../admin/ListadoVentas";

export const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/login" element={<LoginForm />} />
        <Route exact path="/tables/cars" element={<ListadoAutos />} />
        <Route exact path="/tables/users" element={<ListadoUsuarios />} />
        <Route exact path="/tables/sales" element={<ListadoVentas />} />
        <Route
          exact
          path="/tables/categories"
          element={<ListadoCategorias />}
        />
      </Routes>
    </div>
  );
};
export default AdminRoutes;
