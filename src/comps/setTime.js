import React from "react";
import { useState, useEffect } from "react";

function Time() {
	const [date, setDate] = useState(new Date());

	function refreshTime() {
		setDate(new Date());
	}
	useEffect(() => {
		const timerId = setInterval(refreshTime, 1000);
		return function cleanup() {
			clearInterval(timerId);
		};
	}, []);
	return <span>{date.toLocaleTimeString()}</span>;
}
export default Time;
