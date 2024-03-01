import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="static bottom-0 bg-slate-900 py-4">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="col">
            <div className="flex flex-col justify-between">
              <div>
                <Link to="/" className="flex items-center">
                  <h2 className="text-xl font-bold text-slate-100">
                    RapidAuto
                  </h2>
                </Link>
              </div>
              <div className="mt-4">
                <a
                  href="mailto:RapidAuto@company.com"
                  className="text-sm text-gray-100 hover:text-slate-400"
                >
                  RapidAuto@company.com
                </a>
              </div>
            </div>
          </div>
          <div className="col md:col-span-2">
            <h3 className="mb-2 text-lg font-medium text-gray-100 md:text-center">
              Enlaces de interés
            </h3>
            <ul className="mt-4 flex-col items-center space-y-2 md:flex">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-100 hover:text-gray-300"
                >
                  <i className="fas fa-car mr-2"></i> Anuncios &amp; Destacados
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-100 hover:text-gray-300"
                >
                  <i className="fas fa-car mr-2"></i> Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-100 hover:text-gray-300"
                >
                  <i className="fas fa-question-circle mr-2"></i> Ayuda &amp;
                  Informacion
                </a>
              </li>
            </ul>
          </div>
          <div className="col md:col-span-1">
            <h3 className="mb-2 text-center text-lg font-medium text-gray-100">
              Síguenos en:
            </h3>
            <ul className="mt-4 flex flex-row justify-center space-x-4">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f text-lg text-gray-300 hover:text-blue-500"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter text-lg text-gray-300 hover:text-cyan-500"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram text-lg text-gray-300 hover:text-rose-500"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center border-t border-gray-100 py-2">
          <p className="text-xs text-gray-100">
            Copyright © 2024 RapidAuto All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
