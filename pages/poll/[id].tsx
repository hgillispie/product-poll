import Header from "@/header";
import {
	Button,
	Container,
	Heading,
	Progress,
	Spinner,
	Stack,
	StackItem,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
	const router = useRouter();
	const id = router.query.id;

	type Vote = {
		choice: string;
		votes: number;
	};

	type Poll = {
		title: string;
		choices: string[];
		id: string;
	};

	const [poll, setPoll] = useState<Poll>({} as Poll);
	const [votes, setVotes] = useState<Vote[]>([]);
	const [loading, setLoading] = useState(true);
	const [voted, setVoted] = useState(false);
	const [totalVotes, setTotalVotes] = useState(0);

	useEffect(() => {
		if (document.cookie.includes("voted_" + id)) {
			setVoted(true);
		}

		if (id) {
			fetch(`/api/getPoll`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ id }),
			})
				.then((res) => res.json())
				.then(({ data }) => {
					data.choices = data.choices.split(",");
					setPoll(data);
					setLoading(false);

					const votes: Vote[] = [];

					data.choices.forEach((choice: any) => {
						const obj = {
							choice,
							votes: [...data.votes].filter((vote) => vote.choice === choice)
								.length,
						};

						votes.push(obj);
					});

					setVotes(votes);
					setTotalVotes(data.length);
				});
		}
	}, [id]);

	function castVote(option: string) {
		fetch(`/api/castVote`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ option, id: poll.id }),
		})
			.then((res) => res.json())
			.then(({ data }) => {
				const votes: Vote[] = [];

				poll.choices.forEach((choice) => {
					const obj = {
						choice,
						votes: [...data].filter((vote) => vote.choice === choice).length,
					};

					votes.push(obj);
				});

				setVotes(votes);
				setVoted(true);
				setTotalVotes(data.length);

				document.cookie = "voted_" + id + "=true";
			});
	}

	return (
		<Container maxW="container.lg">
			<Header />

			<Container maxW="container.md" mt={6} shadow="lg" p={8} rounded="2xl">
				{loading && <Spinner size="xl" />}

				{!loading && (
					<>
						<Heading my={4}>{poll.title}</Heading>
						{voted ? (
							<Stack spacing={4} mb={4}>
								{poll.choices.map((option, index) => (
									<StackItem key={index} pos="relative">
										<Progress
											colorScheme={"blue"}
											value={
												votes.find((vote) => vote.choice === option)?.votes
											}
											height="8"
											max={totalVotes}
										/>
										<Heading size="sm" pos="absolute" top="0" mt="1" ml="2">
											{option} (
											{votes.find((vote) => vote.choice === option)?.votes})
										</Heading>
									</StackItem>
								))}
							</Stack>
						) : (
							<Stack spacing={2} mb={4}>
								{poll.choices.map((option) => (
									<Button
										key={option}
										onClick={() => castVote(option)}
										isLoading={loading}
										loadingText="Casting Vote"
										disabled={loading}
									>
										{option}
									</Button>
								))}
							</Stack>
						)}
					</>
				)}
			</Container>
		</Container>
	);
};

export default Home;
