import axios from "axios";

export const fetchDataMhs = async () => {
  try {
    const response = await axios.get("http://localhost:5000/mhs");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
