import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Used from "../pages/Used";
import New from "../pages/New";
import Services from "../pages/Services";

export const Routers = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/used" element={<Used />} />
        <Route exact path="/new" element={<New />} />
        <Route exact path="/services" element={<Services />} />
      </Routes>
    </div>
  );
};
