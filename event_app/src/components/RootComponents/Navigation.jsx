import { Link } from "react-router-dom";
import { Box, Flex, Image } from "@chakra-ui/react";

export const Navigation = () => {
	return (
		<Box backgroundColor={"teal.400"}>
			<Flex justifyContent={{ base: "center", md: "left" }} p={1}>
				<Link to="/">
					<Flex>
						<Image
							src="../../Logo/logo_transparent.png"
							alt="logo"
							boxSize={{ base: "60px", md: "70px" }}
						/>
						<Image
							src="../../Logo/text_transparent.png"
							alt="logo"
							boxSize={{ base: "60px", md: "70px" }}
							objectFit={"contain"}
						/>
					</Flex>
				</Link>
			</Flex>
		</Box>
	);
};
