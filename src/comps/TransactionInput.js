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
import { state } from "jshint/src/state";

/* --------------------------------- Styles --------------------------------- */
const FormContainer = styled.div`
	.inputWindow {
		height: 100%;
		padding: 0;
		.windowContent {
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
`;

const TransactionForm = styled.div`
	display: flex;
	flex-direction: column;
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
					<TransactionForm>
						<form onSubmit={onSubmit}>
							<div className="form-control">
								<label htmlFor="text">Text</label>
								<input
									type="text"
									value={text}
									onChange={(e) => setText(e.target.value)}
									placeholder="Enter text..."
								/>
							</div>
							<div className="form-control">
								<label htmlFor="amount"></label>
								<input
									type="number"
									value={amount}
									onChange={(e) => setAmount(e.target.value)}
									placeholder="Enter amount..."
								/>
							</div>
							<button className="btn">Add transaction</button>
						</form>
					</TransactionForm>
				</WindowContent>
			</Window>
		</FormContainer>
	);
};

export { TransactionInput };
