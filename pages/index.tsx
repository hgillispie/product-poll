import { Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import Header from "@/header";

const Home: NextPage = () => {
	return (
		<Container maxW="container.lg">
			<Header />
		</Container>
	);
};

export default Home;
