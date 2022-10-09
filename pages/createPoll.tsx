import {
	Alert,
	Button,
	Container,
	Flex,
	Heading,
	Input,
	Stack,
	StackItem,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Header from "@/header";
import { useState } from "react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";

const Home: NextPage = () => {
	const [title, setTitle] = useState("Do you like this poll?");
	const [options, setOptions] = useState(["Yes", "No"]);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const submit = () => {
		setError("");

		// Validate title
		if (title.length < 5 || title.length > 60) {
			setError("Title must be between 5 and 100 characters");
			return;
		}

		// Validate options
		if (options.some((option) => option.length < 1 || option.length > 60)) {
			setError("Options must be between 1 and 30 characters");
			return;
		}

		type Data = {
			message: string;
			error: boolean;
			data?: any;
		};

		// API
		fetch("/api/createPoll", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title,
				options,
			}),
		})
			.then((res) => res.json())
			.then((res) => {
				const resp: Data = res as any as Data;

				if (resp.error) {
					setError(resp.message);
				} else {
					window.location.href = `/poll/${resp.data.id}`;
				}
			});
	};

	return (
		<Container maxW="container.lg">
			<Header />

			<Container maxW="container.md" mt={6} shadow="lg" p={8} rounded="2xl">
				<Heading mb={4}>Create Poll</Heading>

				<Heading my={4} size="md">
					Title (Max 60)
				</Heading>

				<Input
					placeholder="Poll Title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				<Heading my={4} size="md">
					Options (Minimum 2, Maximum 10)
				</Heading>
				<Stack spacing={4}>
					{options.map((option, index) => (
						<StackItem key={index}>
							<Flex>
								<Input
									placeholder="Option"
									value={option}
									onChange={(e) => {
										const newOptions = [...options];
										newOptions[index] = e.target.value;
										setOptions(newOptions);
									}}
								/>

								<Stack direction="row" ml={2}>
									<Button
										onClick={() => {
											const newOptions = [...options];
											newOptions.splice(index, 1);
											setOptions(newOptions);
										}}
										disabled={options.length <= 2}
										colorScheme="red"
										variant="ghost"
									>
										<DeleteIcon />
									</Button>

									<Button
										onClick={() => {
											const newOptions = [...options];
											newOptions.push("");
											setOptions(newOptions);
										}}
										disabled={
											options.length >= 10 || index !== options.length - 1
										}
										colorScheme="green"
									>
										<AddIcon />
									</Button>
								</Stack>
							</Flex>
						</StackItem>
					))}
				</Stack>

				{error && (
					<Alert mt={4} status="error">
						{error}
					</Alert>
				)}

				<Button
					mt={4}
					colorScheme="blue"
					onClick={submit}
					isLoading={loading}
					disabled={loading}
				>
					Create Poll
				</Button>
			</Container>
		</Container>
	);
};

export default Home;
