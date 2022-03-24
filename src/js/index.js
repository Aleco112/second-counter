//import react into the bundle
import React from "react";
import reactDom from "react-dom";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { SecondsCounter } from "./component/SecondsCounter.jsx";

//render your react application

let i = 0;
const start = Date.now();
setInterval(() => {
	i++;
	const seconds = Math.floor((Date.now() - start) / 1000);
	ReactDOM.render(
		<SecondsCounter seconds={seconds} />,
		document.querySelector("#app")
	);
}, 1000);
