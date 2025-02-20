export default function Footer() {
  return (
    <footer className="bg-DarkOrchid text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center text-center md:text-left md:justify-between px-6">
        {/* Redes sociales (columna en móvil, fila en escritorio) */}
        <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
          <li>
            <a
              href="https://www.linkedin.com/in/diego-brito-sanchez-783583143/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-gray-300 transition-colors cursor-pointer text-lg font-medium"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/DiegoBritoSanchez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-gray-300 transition-colors cursor-pointer text-lg font-medium"
            >
              GitHub
            </a>
          </li>
        </ul>

        {/* Autoría centrada */}
        <div className="text-gray-100 text-sm mt-2 md:mt-0">
          © 2025 Diego Brito Sánchez
        </div>

        {/* <div className="text-gray-100 text-sm mt-2 md:mt-0 md:block hidden">
          Política
        </div> */}
      </div>
    </footer>
  );
}
