import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function AboutMe() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/profile/`)
      .then((response) => response.json())
      .then((data) => setProfile(data))
      .catch((error) => console.error("Error fetching profile:", error));
  }, []);

  if (!profile) {
    return <p className="text-center text-gray-500">Cargando...</p>;
  }

  return (
    <main className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Sobre mí</h2>

        <div className="bg-white p-6 rounded-lg shadow-md max-w-6xl mx-auto text-center">
          <h3 className="text-xl font-bold">{profile.name}</h3>
          <ReactMarkdown className="text-gray-700 mt-2 text-justify">
            {profile.bio}
          </ReactMarkdown>

          {/* Botón para descargar CV */}
          {profile.cv && (
            <a
              // href={`http://localhost:8000/media/${profile.cv}`} // URL local
              href={`${import.meta.env.VITE_API_URL}${profile.cv}`} // URL del backend
              className="mt-4 inline-block bg-DarkOrchid text-white py-2 px-6 rounded-lg hover:bg-purple-700 hover:text-white transition"
              download
            >
              Descargar CV
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
