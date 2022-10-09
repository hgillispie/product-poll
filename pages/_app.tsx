// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import theme from "$/theme";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<NextNProgress
				height={2}
				startPosition={0.0}
				options={{ showSpinner: false }}
			/>

			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
