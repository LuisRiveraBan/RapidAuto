import "./App.css";
import { Routers } from "./routers/routes.jsx";
import Footer from "./shared/footer/Footer.jsx";
import Navbar from "./shared/navbar/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routers />
      <Footer />
    </>
  );
}

export default App;
