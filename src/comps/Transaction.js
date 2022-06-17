import React, { useState, useContext } from "react";
import { Button, Divider, Fieldset } from "react95";
import { GlobalContext } from "../context/GlobalContext";

export const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(GlobalContext);
	const sign = transaction.amount < 0 ? "-" : "+";

	return (
		<li className={transaction.amount < 0 ? "minus" : "plus"}>
			<Fieldset className="fieldset" label={transaction.text}>
				<Button
					primary
					onClick={() => deleteTransaction(transaction.id)}
					className="deleteButton"
				>
					X
				</Button>
				<span>
					{sign}${Math.abs(transaction.amount)}
				</span>
			</Fieldset>
			<Divider />
		</li>
	);
};
