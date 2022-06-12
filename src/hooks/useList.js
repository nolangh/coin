import React from "react";
import { useState } from "react";
import { Fieldset } from "react95";
import { assets } from "../comps/CoinInput";

const useList = () => {
	const [list, setList] = useState();

	const setUpdate = () =>
		setList(
			assets.map((element) => {
				return <Fieldset label={element.title}>{element.number}</Fieldset>;
			})
		);
	return [list, setUpdate];
};

export { useList };
