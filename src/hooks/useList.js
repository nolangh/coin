import React from "react";
import { useState } from "react";
import { assets } from "../comps/CoinInput";

//NOTE Figure out why the hell this list wont populate
const useList = () => {
	const [list, setList] = useState();

	const setUpdate = () =>
		setList(
			assets.map((element) => (
				<div>
					<ul>
						<h3 key={element.title}>{element.title}</h3>
						<li key={element.number}>{element.number}</li>
					</ul>
				</div>
			))
		);
	return [list, setUpdate];
};

export { useList };

// 	return (
// 		<Fieldset label={element.title}>
// 			<div>
// 				<ul>
// 					<li>{element.amount}</li>
// 				</ul>
// 			</div>
// 		</Fieldset>
// 	);
// })
