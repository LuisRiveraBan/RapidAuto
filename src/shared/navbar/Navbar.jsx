import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 bg-gray-100 shadow-md">
      <div className="container relative mx-auto flex flex-row items-center justify-between px-4 py-5">
        <Link to="/" className="flex items-center">
          <h2 className="text-xl font-bold text-gray-800">RapidAuto</h2>
        </Link>
        <nav className="hidden space-x-4 font-medium text-gray-600 md:flex">
          <Link to="/home" className="hover:text-gray-800">
            Inicio
          </Link>
          <Link to="/used" className="hover:text-gray-800">
            Usados
          </Link>
          <Link to="/new" className="hover:text-gray-800">
            Nuevos
          </Link>
          <Link to="/services" className="hover:text-gray-800">
            Servicios
          </Link>
          <Link to="/login" className="hover:text-gray-800">
            Iniciar Sesión
          </Link>
          <Link to="/register" className="hover:text-gray-800">
            Registrarte
          </Link>
        </nav>
        <div className="md:hidden">
          <button
            onClick={handleMenuClick}
            className="rounded-md border p-2 text-gray-600 focus:border-gray-400"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={menuOpen ? "block md:hidden" : "hidden"}
        style={{ transition: "all 0.2s ease-in-out" }}
      >
        {/* mobile */}
        <div className="relative space-y-4 border-t border-gray-200 bg-gray-100 py-4">
          <Link
            to="/home"
            className="block px-4 py-2 font-medium text-gray-600 hover:text-gray-800"
          >
            Inicio
          </Link>
          <Link
            to="/used"
            className="block px-4 py-2 font-medium text-gray-600 hover:text-gray-800"
          >
            Usados
          </Link>
          <Link
            to="/new"
            className="block px-4 py-2 font-medium text-gray-600 hover:text-gray-800"
          >
            Nuevos
          </Link>
          <Link
            to="/services"
            className="block px-4 py-2 font-medium text-gray-600 hover:text-gray-800"
          >
            Servicios
          </Link>
          <Link
            to="/login"
            className="block px-4 py-2 font-medium text-gray-600 hover:text-gray-800"
          >
            Iniciar Sesión
          </Link>
          <Link
            to="/register"
            className="block px-4 py-2 font-medium text-gray-600 hover:text-gray-800"
          >
            Registrarte
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
