import ColormodeToggle from "@/colormodeToggle";
import { Box, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
	return (
		<Flex mt={6}>
			<Box>
				<Link href="/">
					<Button variant="ghost">Polls</Button>
				</Link>
			</Box>

			<Box ml="auto">
				<Link href="/createPoll">
					<Button mr={4}>Create Poll</Button>
				</Link>

				<ColormodeToggle />
			</Box>
		</Flex>
	);
};

export default Header;
