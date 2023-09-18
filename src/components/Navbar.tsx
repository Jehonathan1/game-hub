import { HStack, Image } from "@chakra-ui/react";
// import logo from "../assets/logo.webp";
import logo from "../assets/YDS.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
	onSearce: (searchText: string) => void;
}
function Navbar({onSearce}:Props) {
	return (
		<HStack justifyContent={"space-between"} padding={"10px"}>
			<Image src={logo} boxSize={"60px"} />
			<SearchInput onSearce={onSearce} />
			<ColorModeSwitch />
		</HStack>
	);
}

export default Navbar;
