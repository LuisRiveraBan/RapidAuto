import { useState } from "react";
import { Link } from "react-router-dom";
import MenuItem from "../../components/MenuItem";

const AdminSidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    {
      id: 1,
      label: "Inicio",
      href: "/",
    },
    {
      id: 2,
      label: "Formularios",
      href: "/forms",
    },
    {
      id: 3,
      label: "Tablas",
      href: "/tables",
      subMenu: [
        {
          id: 31,
          label: "Lista de Usuarios",
          href: "/tables/users",
        },
        {
          id: 32,
          label: "Lista de Autos",
          href: "/tables/cars",
        },
        {
          id: 33,
          label: "Lista de Ventas",
          href: "/tables/sales",
        },
        {
          id: 34,
          label: "Lista de Categorias",
          href: "/tables/categories",
        },
      ],
    },
    {
      id: 4,
      label: "Usuario",
      href: "/user",
      subMenu: [
        {
          id: 41,
          label: "Perfil de Usuario",
          href: "/user/profile",
        },
      ],
    },
  ];

  return (
    <div
      className={`fixed left-0 top-0 z-50 h-screen w-64  bg-gray-800 text-white transition duration-200 ease-in-out ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex h-16 items-center justify-between bg-gray-900 px-4">
        <Link to="/" className="flex items-center">
          <h2 className="text-xl font-bold text-gray-800">RapidAuto</h2>
        </Link>
        <div className="close-sidebar" onClick={handleMenuToggle}>
          <i className="ion-close-round text-2xl"></i>
        </div>
      </div>
      <div className={` px-4 pb-2 pt-4 ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="sidebar-menu">
          <div id="accordion-menu" className="space-y-2">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
