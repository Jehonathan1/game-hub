import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenre";

interface Props {
	selectedGenre: Genre | null;
	selectedPlatform: Platform | null;
}

function GameGrid({selectedGenre, selectedPlatform} : Props) {
	const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
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
