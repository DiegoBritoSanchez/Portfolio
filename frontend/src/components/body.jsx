import { useState, useEffect } from "react";

export default function Body() {
  const [projects, setProjects] = useState([]); // Estado para los datos

  // Fetch de datos al cargar el componente
  useEffect(() => {
    fetch("http://localhost:8000/projects/api/projects/") // URL del backend
      .then((response) => response.json())
      .then((data) => setProjects(data)) // Guardar los datos en el estado
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <main className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Proyectos</h2>
        <div className="flex flex-col gap-8 mx-auto max-w-4xl">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer" // Seguridad
              className="no-underline"
            >
              <div
                className={`flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md 
            ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Imagen */}
                {project.image && (
                  <img
                    src={`http://localhost:8000${project.image}`}
                    alt={project.title}
                    className="w-full md:w-1/3 h-40 object-cover rounded-lg"
                  />
                )}

                {/* Contenido */}
                <div
                  className={`md:w-2/3 md:px-6 ${
                    index % 2 !== 0 ? "text-right" : "text-left"
                  }`}
                >
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-700">{project.description}</p>
                  <p className="text-sm text-gray-500">
                    Tecnología: {project.technology}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
