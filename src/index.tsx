import "utils/axios";
import "./config/i18n";
import { ColorModeScript } from "@chakra-ui/react";
import WebApp from "@twa-dev/sdk";
import * as ReactDOM from "react-dom/client";
// import VConsole from "vconsole";

WebApp.ready();
import { App } from "./App";
import "dayjs/locale/zh-cn";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";
// new VConsole();
const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <>
    <ColorModeScript />
    <App />
  </>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
