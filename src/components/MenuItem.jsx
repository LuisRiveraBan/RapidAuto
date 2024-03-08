import { Link } from "react-router-dom"; // Import for internal navigation

const MenuItem = ({ item }) => {
  const { label, href, subMenu } = item;

  const handleClick = () => {
    // Prevent default behavior for internal links using react-router-dom
    if (href && href.startsWith("/")) {
      event.preventDefault();
      return;
    }
  };

  return (
    <div className={`flex items-center px-4 py-2`}>
      {subMenu ? (
        <div className="group relative">
          <Link
            to="#"
            className="group flex items-center text-gray-200"
            onClick={handleClick}
          >
            <span className="material-icons mr-2">Menu</span>
            <span className="mtext">{label}</span>
            <span className="absolute right-0 ml-2 h-4 w-4 -translate-y-1/2 transform transition duration-200 ease-in-out group-hover:rotate-180">
              <svg
                className="fill-current text-gray-200 hover:text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 10.707a1 1 0 010-1.414L14.586 4.707a1 1 0 011.414 1.414L10.707 10.707zM10.707 14.293a1 1 0 01-1.414-1.414L4.707 9.586a1 1 0 011.414-1.414l5.586 5.586z" />
              </svg>
            </span>
          </Link>
          <div
            className={`absolute left-0 top-full z-10 hidden w-full rounded-md bg-white py-2 shadow-sm group-hover:block`}
          >
            {subMenu.map((subItem) => (
              <MenuItem key={subItem.id} item={subItem} />
            ))}
          </div>
        </div>
      ) : href ? (
        <Link to={href} className="flex items-center text-gray-400">
          <span className="mtext">{label}</span>
        </Link>
      ) : null}
    </div>
  );
};

export default MenuItem;
