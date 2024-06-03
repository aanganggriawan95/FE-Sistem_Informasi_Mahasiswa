// src/api/beritaApi.js
import axios from "axios";

const API_URL = "http://localhost:5000/berita";

export const fetchBerita = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching berita:", error);
    throw error;
  }
};
