import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenre";
import { Platform } from "./usePlatforms";

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: {platform: Platform}[];
}

const useGames = (gameQuery:GameQuery) => useData<Game>("/games", {
	params: {
		genres: gameQuery.genre?.id, 
		platforms: gameQuery.platform?.id,
		search: gameQuery.searchText
	}}, 
	[gameQuery]);
export default useGames;
