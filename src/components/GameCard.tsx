import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from "../services/image-url";

interface Props {
	game: Game;
}

function GameCard({ game }: Props) {
	return (
		<Card borderRadius={10} overflow={"hidden"}>
			<Image src={getCroppedImageUrl(game.background_image)}></Image>
			<CardBody>
				<Heading fontSize={"lg"}>{game.name}</Heading>
				<PlatformIconList
					platforms={game.parent_platforms.map((p) => p.platform)}
				/>
			</CardBody>
		</Card>
	);
}

export default GameCard;
