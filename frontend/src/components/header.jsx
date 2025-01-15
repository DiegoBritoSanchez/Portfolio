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
          {["Home", "Acerca de Mi", "Proyectos", "Contacto"].map((item) => (
            <li
              key={item}
              className="hover:text-gray-300 transition-colors cursor-pointer text-lg font-medium"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
