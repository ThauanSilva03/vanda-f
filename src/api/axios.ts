import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://10.99.0.73:8000/api",
});
