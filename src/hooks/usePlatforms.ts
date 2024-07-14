import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clients";
import platform from "../data/platform";
import ms from "ms";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platform,
  });

export default usePlatforms;
