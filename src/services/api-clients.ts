import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8cec5a7e796841d68674ed79c1d66c28",
  },
});

export default apiClient;
