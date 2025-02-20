import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-DarkOrchid text-white sticky top-0 shadow-md">
      <nav className="container mx-auto flex items-center py-4 px-6">
        {/* Logo */}
        <div className="mr-6">
          <div className="w-10 h-10 bg-white rounded-md"></div>
        </div>
        {/* Menú */}
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-gray-100 hover:text-gray-300 transition-colors cursor-pointer text-lg font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-100 hover:text-gray-300 transition-colors cursor-pointer text-lg font-medium"
            >
              Acerca de Mi
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-100 hover:text-gray-300 transition-colors cursor-pointer text-lg font-medium"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
