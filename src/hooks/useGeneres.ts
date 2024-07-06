import { useEffect, useState } from "react";
import apiClient from "../services/api-clients";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}
interface FetchgenresResponse {
  count: number;
  results: Genre[];
}
const useGeneres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<FetchgenresResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          console.log("Request canceled", err.message);
        } else if (err.response) {
          setError(`Error: ${err.response.status} - ${err.response.data}`);
        } else if (err.request) {
          setError("Network error: No response received from server.");
        } else {
          setError(`Error: ${err.message}`);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);
  return { genres, error, loading };
};

export default useGeneres;
