import axios from "axios";

// Configura la URL base de la API
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/projects/api", // Cambiar por la URL definitiva
});

export const fetchProjects = async () => {
  try {
    const response = await api.get("/projects/");
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};
