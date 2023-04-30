import { Box, Flex, Text } from "@chakra-ui/react";

export const Footer = () => {
	return (
		<Box backgroundColor={"teal.400"} p={{ base: 4, md: 6 }} mt={4}>
			<Flex justifyContent={"center"}>
				<Text color={"white"} fontSize={"xs"}>
					© {new Date().getFullYear()} Oliver Bozinovski{" "}
				</Text>
			</Flex>
		</Box>
	);
};
