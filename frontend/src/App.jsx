// import { useState, useEffect } from 'react';

// import React from "react";
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-[Lavender] text-black">
      {/* Header */}
      <header className="bg-[DarkOrchid] text-white sticky top-0 shadow-md">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-lg font-bold">Mi Portafolio</div>
          <ul className="flex space-x-4">
            <li className="hover:text-[Lavender] cursor-pointer">Home</li>
            <li className="hover:text-[Lavender] cursor-pointer">Acerca de Mi</li>
            <li className="hover:text-[Lavender] cursor-pointer">Proyectos</li>
            <li className="hover:text-[Lavender] cursor-pointer">Contacto</li>
          </ul>
        </nav>
      </header>

      {/* Body */}
      <main className="grid grid-cols-12 gap-4 container mx-auto py-10">
        <aside className="col-span-2 bg-white rounded-md shadow-md p-4 hidden lg:block">
          <p>Columna 1</p>
        </aside>
        <section className="col-span-8 bg-white rounded-md shadow-md p-6">
          <h1 className="text-3xl font-bold mb-6">Proyectos</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Aquí se mapearán las tarjetas dinámicas */}
            <div className="bg-gray-100 rounded-md shadow p-4">
              <h2 className="font-semibold text-lg">Proyecto Ejemplo</h2>
              <p>Descripción breve del proyecto.</p>
            </div>
          </div>
        </section>
        <aside className="col-span-2 bg-white rounded-md shadow-md p-4 hidden lg:block">
          <p>Columna 2</p>
        </aside>
      </main>

      {/* Footer */}
      <footer className="bg-[DarkOrchid] text-white py-6">
        <div className="container mx-auto grid grid-cols-12">
          <div className="col-span-5 flex justify-center lg:justify-start">
            <a href="#" className="flex items-center space-x-2">
              <span className="material-icons">link</span>
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="col-span-2 text-center">© 2025 Tu Nombre</div>
          <div className="col-span-5 flex justify-center lg:justify-end">
            <a href="#" className="flex items-center space-x-2">
              <span className="material-icons">code</span>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
