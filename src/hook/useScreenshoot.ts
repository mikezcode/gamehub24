
import { useQuery } from "@tanstack/react-query";
import { Screenshoot } from "../entities/Screenshoot";
import ApiClient from "../services/apiClient";

const useScreenshoot = (id?: number) => {
  const apiClient = new ApiClient<Screenshoot>(`/games/${id}/screenshots`);
  return useQuery({
    queryKey: ["gamescreenshoot", id],
    queryFn: apiClient.getAll,
  });
};
export default useScreenshoot;
