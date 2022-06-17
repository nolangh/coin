import { Field } from "formik";
import React from "react";
import { Button, Divider, Fieldset } from "react95";

export const Transaction = ({ transaction }) => {
	return (
		<li className="minus">
			<Fieldset label={transaction.text}>
				<Button className="deleteButton">X</Button>
				<span>-{transaction.amount}</span>
			</Fieldset>
			<Divider />
		</li>
	);
};
