import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";

ReactDOM.render(<App />, document.getElementById(<Provider>'root'</Provider>));
registerServiceWorker();
