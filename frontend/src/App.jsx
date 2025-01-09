import { useState, useEffect } from 'react';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/projects/api/projects/')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => console.error('Error al obtener proyectos:', error));
  }, []);

  return (
    <div className="bg-[#E6E6FA] min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Proyectos</h1>
      <div className="grid grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
            <span className="text-sm text-gray-500">{project.technology}</span>
            {project.image && (
              <img
              src={`/media/${project.image}`}
              alt={project.title}
              className="w-full h-40 object-cover mt-4 rounded-md"
            />            
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
