import { Game } from "../hook/useGames";
import ApiClient from "./apiClient";

const gameService = new ApiClient<Game>("/games");

export default gameService;
