import styled from "@emotion/styled";
import { useCallback, useState } from "react";
import Flex from "./components/Flex";
import API from "./utils/api";
import Nullable from "./types/Nullable";

const Root = styled(Flex)`
	width: 100vw;
	height: 100vh;

	padding: 10px;
	overflow: hidden;
`;

interface Nonce {
	ping?: Nullable<string>;
	pong?: Nullable<string>;
}

function App() {
	const [nonce, setNonce] = useState<Nonce>({});

	const ping = useCallback(async () => {
		const pingNonce = Math.floor(Math.random() * 999)
			.toString()
			.padStart(3, "0");
		setNonce((prev) => ({ ...prev, ping: pingNonce }));

		const pongNonce = await API.ping(pingNonce).catch((error) => {
			console.error(error);
			return null;
		});
		setNonce((prev) => ({ ...prev, pong: pongNonce }));
	}, []);

	return (
		<Root className="font-mono" dir="column" justify="center" align="center" gap="10px">
			<button onClick={ping}>Send ping</button>

			<Flex dir="row" justify="center" gap="8px" wrap>
				{[nonce.ping && `Ping (${nonce.ping})`, nonce.pong && `Pong (${nonce.pong})`]
					.filter((s) => !!s)
					.map((string, index) => (
						<>
							{index !== 0 && <div key={index * 2 - 1}>::</div>}
							<div key={index * 2}>{string}</div>
						</>
					))}
			</Flex>
		</Root>
	);
}

export default App;
