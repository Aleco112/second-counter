import React from "react";
import { SecondsCounter } from "./SecondsCounter.jsx";

//create your first component
const Home = () => {
	return (
		<section>
			<SecondsCounter seconds={2345} />
		</section>
	);
};

export default Home;
