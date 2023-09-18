import { HStack, Text, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ColorModeSwitch = () => {
	const { toggleColorMode, colorMode } = useColorMode();

	// Animation variants for the Switch (marginLeft animation)
	const switchVariants = {
		unchecked: { marginLeft: "1px" },
		checked: { marginLeft: "10px" },
	};

	return (
		<HStack align="center">
			<motion.div
				transition={{ type: "spring", stiffness: 500, damping: 50 }}
				style={{
					borderRadius: "20px",
					width: "40px",
					height: "21px",
					cursor: "pointer",
					marginRight: "5px",

					position: "relative",

					backgroundColor: colorMode === "dark" ? "#48BB78" : "#CBD5E0",
				}}
				onClick={toggleColorMode}
			>
				<motion.div
					animate={colorMode === "dark" ? "checked" : "unchecked"}
					variants={switchVariants}
					transition={{ type: "spring", stiffness: 300, damping: 15 }}
					style={{
						width: "15px",
						height: "15px",
						borderRadius: "50%",
						backgroundColor: "#FFF",
						position: "absolute",
						top: "3px",
						left: colorMode === "dark" ? "11.5px" : "2px",
					}}
				/>
			</motion.div>
			<Text whiteSpace='nowrap' style={{ marginRight: "10px" }}>Dark Mode</Text>
		</HStack>
	);
};

export default ColorModeSwitch;
