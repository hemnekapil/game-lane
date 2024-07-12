import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-clients";
import apiClient from "../services/api-clients";
import platform from "../data/platform";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platform.length, results: platform },
  });

export default usePlatforms;
