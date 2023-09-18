import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenre";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";

interface Props {
	gameQuery:GameQuery;
}

function GameGrid({ gameQuery } : Props) {
	const { data, error, isLoading } = useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
				padding={10}
				spacing={5}
			>
				{isLoading &&
					skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
				{data && data.map((game) => <GameCard key={game.id} game={game} />)}
			</SimpleGrid>
		</>
	);
}

export default GameGrid;
