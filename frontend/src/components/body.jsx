import { useEffect, useState } from "react";

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
        <div className="grid gap-6 max-w-4xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p>{project.description}</p>
              <p className="text-sm text-gray-500">Tecnología: {project.technology}</p>
              <img
                src={`http://localhost:8000${project.image}`}
                alt={project.title}
                className="mt-4 rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
