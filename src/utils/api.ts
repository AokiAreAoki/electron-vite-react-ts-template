import { API as NodeAPI } from "../../electron/main/api";

interface WindowWithAPI {
	API: typeof NodeAPI;
}

const { API } = window as typeof window & WindowWithAPI;

export default API;
