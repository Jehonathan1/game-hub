import { Box, Grid, GridItem, HStack, Show, VStack, interactivity } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	searchText: string;
}

function App() {
	const[gameQuery, setGameQuery] =useState<GameQuery>({} as GameQuery);


	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 1fr",
			}}
		>
			<GridItem area={"nav"}>
				<Navbar onSearce={(searchText) => setGameQuery({...gameQuery, searchText})}/>
			</GridItem>
			<Show above="lg">
				<GridItem area={"aside"} paddingX={"20px"} marginY={"30px"}>
					<GenreList selectedGenre={gameQuery.genre} onSelectedGenre={(genre) => setGameQuery({...gameQuery, genre})}></GenreList>
				</GridItem>
			</Show>
			<GridItem area={"main"}>
				<Box paddingLeft={10} paddingTop={8}>
					<GameHeading gameQuery={gameQuery}/>
					<HStack paddingTop={10} marginBottom={-5}>
						<PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform) => setGameQuery({...gameQuery,  platform})} />
					</HStack>
				</Box>
				<GameGrid gameQuery={gameQuery}/>
			</GridItem>
		</Grid>
	);
}

export default App;
