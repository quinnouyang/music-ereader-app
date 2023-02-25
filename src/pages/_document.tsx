import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
	render() {
		return (
			<Html>
				<Head>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/favicon/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="imapng"
						sizes="32x32"
						href="/favicon/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="imapng"
						sizes="16x16"
						href="/favicon/favicon-16x16.png"
					/>
					{/* <link rel="manifest" href="/favicons/site.webmanifest" /> */}
					<link
						rel="mask-icon"
						href="/favicon/safari-pinned-tab.svg"
						// color="#13294B"
					/>
					{/* <meta name="msapplication-TileColor" content="#da532c" />
					<meta name="theme-color" content="#ffffff" /> */}
				</Head>
				<body>
					{/* Make Color mode to persists when you refresh the page. */}
					<ColorModeScript />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
