import React from "react";
export function SecondsCounter(props) {
	const d1 = Math.floor((props.seconds / 100000) % 10);
	const d2 = Math.floor((props.seconds / 10000) % 10);
	const d3 = Math.floor((props.seconds / 1000) % 10);
	const d4 = Math.floor((props.seconds / 100) % 10);
	const d5 = Math.floor((props.seconds / 10) % 10);
	const d6 = Math.floor((props.seconds / 1) % 10);

	return (
		<section className="header">
			<div className="number">🕘</div>
			<div className="number">{d1}</div>
			<div className="number"> {d2} </div>
			<div className="number"> {d3} </div>
			<div className="number">{d4} </div>
			<div className="number"> {d5}</div>
			<div className="number">{d6} </div>
		</section>
	);
}
