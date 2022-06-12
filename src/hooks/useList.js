import React from "react";
import { useState } from "react";
import { assets } from "../comps/CoinInput";
import { Fieldset } from "react95";

const useList = () => {
	const [list, setList] = useState();

	const setUpdate = () =>
		setList(
			assets.map((element) => {
				return <Fieldset label={element.title}>"{element.amount}"</Fieldset>;
			})
		);
	return [list, setUpdate];
};

export { useList };
