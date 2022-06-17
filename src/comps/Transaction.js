import { Field } from "formik";
import React from "react";
import { Button, Divider, Fieldset } from "react95";

export const Transaction = ({ transaction }) => {
	const sign = transaction.amount < 0 ? "-" : "+";

	return (
		<li className={transaction.amount < 0 ? "minus" : "plus"}>
			<Fieldset label={transaction.text}>
				<Button className="deleteButton">X</Button>
				<span>
					{sign}${Math.abs(transaction.amount)}
				</span>
			</Fieldset>
			<Divider />
		</li>
	);
};
