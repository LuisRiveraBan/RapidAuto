import { Route, Routes } from "react-router-dom";
import Index from "../admin/Index";
import LoginForm from "../components/LoginForm";

export const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
};
export default AdminRoutes;
