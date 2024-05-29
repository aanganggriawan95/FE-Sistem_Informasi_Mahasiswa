import axios from "axios";

export const fetcUser = async () => {
  try {
    const response = await axios.get("http://localhost:5000/users");
    console.log(response);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
