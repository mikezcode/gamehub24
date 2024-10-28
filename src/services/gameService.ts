import { Game } from "../hook/use-Game";
import ApiClient from "./api-client";

 const gameService = new ApiClient<Game>("/games");

  export default gameService