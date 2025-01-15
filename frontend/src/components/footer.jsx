export default function Footer() {
  return (
    <footer className="bg-DarkOrchid text-white py-6">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Enlaces */}
        <ul className="flex space-x-4">
          <li className="hover:text-gray-300 cursor-pointer">LinkedIn</li>
          <li className="hover:text-gray-300 cursor-pointer">GitHub</li>
        </ul>
        {/* Derechos */}
        <div className="text-center mt-4 md:mt-0">© 2025 Tu Nombre</div>
        {/* Espaciado */}
        <p className="hover:text-gray-300 cursor-pointer text-right mt-4 md:mt-0">
          Política
        </p>
      </div>
    </footer>
  );
}
