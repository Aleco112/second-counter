import React from "react";
export function Timer(props) {
	return (
		<>
			<section>
				<img src={props.calender} />
				<div>{props.seconds} </div>
				<div>{props.seconds} </div>
				<div>{props.seconds} </div>
			</section>
		</>
	);
}
