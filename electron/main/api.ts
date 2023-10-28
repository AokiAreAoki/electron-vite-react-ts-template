import { ipcMain } from "electron";

export namespace API {
	export async function ping(pingNonce: string) {
		console.log(`[Node] Ping nonce received: ${pingNonce}`);

		const pongNonce = Math.floor(Math.random() * 999)
			.toString()
			.padStart(3, "0");
		console.log(`[Node] Pong nonce sent: ${pongNonce}`);

		return pongNonce; // return data to front end
	}
}

export function initAPI() {
	ipcMain.handle("ping", (_, nonce: string) => API.ping(nonce));
}
