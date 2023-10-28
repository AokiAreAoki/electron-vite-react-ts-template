import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistedStore, store } from "./redux/store";
import App from "./App";
// import "./samples/node-api";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate loading={"Loading..."} persistor={persistedStore}>
				<App />
			</PersistGate>
		</Provider>
	</StrictMode>,
);

postMessage({ payload: "removeLoading" }, "*");
