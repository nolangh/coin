import React from "react";
import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "98.css";
import {
	Window,
	WindowContent,
	Button,
	Bar,
	Divider,
	Fieldset,
	WindowHeader,
	TextField,
	NumberField,
} from "react95";
import styled from "styled-components";

/* --------------------------------- Styles --------------------------------- */
const FormContainer = styled.div`
	.inputWindow {
		width: 30rem;
		height: 10rem;
		padding: 0;
		.windowContent {
			display: flex;
			flex-direction: column;
			align-items: center;
			background: green;
			.transactionForm {
				display: flex;
				height: 15rem;
				flex-direction: column;
				justify-content: space-between;
				background-color: coral;
				width: 28rem;
			}
		}

		.inputBar {
			display: flex;
			justify-content: center;
			align-items: center;
			color: white;
			background-color: #060084;
			height: 3rem;
			width: 100%;
		}
	}
`;

const TransactionFormContainer = styled.div`
	height: 100%;
`;

/* ------------------------------------------------------------------------ */

const TransactionInput = () => {
	const [text, setText] = useState("");
	const [amount, setAmount] = useState(0);
	const { addTransaction } = useContext(GlobalContext);

	const onSubmit = (e) => {
		e.preventDefault();

		const newTransaction = {
			id: Date.now(),
			text,
			amount: +amount,
		};
		addTransaction(newTransaction);
	};

	return (
		<FormContainer>
			{/* ANCHOR ASSET INPUT*/}
			<Window className="inputWindow">
				<Bar className="inputBar">Enter Transaction</Bar>
				<WindowContent className="windowContent">
					<TransactionFormContainer>
						<form className="transactionForm" onSubmit={onSubmit}>
							<div>
								<label for="text17">Title: </label>
								<input
									style={{ height: 25 }}
									className="titleInput"
									id="text17"
									type="text"
									value={text}
									onChange={(e) => setText(e.target.value)}
									placeholder=""
								/>
							</div>
							<Divider />
							<div>
								<label for="text24">Amount: </label>
								<input
									style={{ height: 25 }}
									className="amountInput"
									id="text24"
									type="number"
									defaultValue={amount}
									onChange={(e) => setAmount(e.target.value)}
								/>
							</div>
							<button className="btn">Add transaction</button>
						</form>
					</TransactionFormContainer>
				</WindowContent>
			</Window>
		</FormContainer>
	);
};

export { TransactionInput };
