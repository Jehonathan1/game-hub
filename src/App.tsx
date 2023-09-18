import { Grid, GridItem, HStack, Show, VStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SearchInput from "./components/SearchInput";


function App() {
	const[selectedGenre, setSelectedGenre] =useState<Genre | null>(null);
	const[selectedPlatform, setSelectedPlatform] =useState<Platform | null>(null);

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
				<Navbar/>
			</GridItem>
			<Show above="lg">
				<GridItem area={"aside"} paddingX={"20px"} marginY={"30px"}>
					<GenreList selectedGenre={selectedGenre} onSelectedGenre={(genre) => setSelectedGenre(genre)}></GenreList>
				</GridItem>
			</Show>
			<GridItem area={"main"}>
				<HStack paddingLeft={10} paddingTop={10} marginBottom={-5}>
					<PlatformSelector selectedPlatform={selectedPlatform} onSelectedPlatform={(platform) => setSelectedPlatform(platform)} />
				</HStack>
				<GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}/>
			</GridItem>
		</Grid>
	);
}

export default App;
