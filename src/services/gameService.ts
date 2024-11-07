import  Game  from "../entities/Game";
import ApiClient from "./apiClient";

const gameService = new ApiClient<Game>("/games");

export default gameService;
