import { Field } from "formik";
import React from "react";
import { Fieldset } from "react95";
import { assets } from "../comps/CoinInput";

export default function List() {
	return (
		<>
			{assets.map(({ amount }) => (
				<Fieldset>
					<p key={amount}> {amount}</p>
				</Fieldset>
			))}
		</>
	);
}
