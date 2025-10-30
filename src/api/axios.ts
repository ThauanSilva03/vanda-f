import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://computacao.unir.br/vanda/api",
});
