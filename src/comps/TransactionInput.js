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
} from "react95";
import styled from "styled-components";
import Draggable from "react-draggable";

/* --------------------------------- Styles --------------------------------- */
const FormContainer = styled.div`
	.inputWindow {
		width: 30rem;
		padding: 0;
		.amountInput {
			margin: 1rem;
		}
		.titleInput {
			margin: 1rem;
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
		<Draggable>
			<FormContainer>
				{/* ANCHOR ASSET INPUT*/}
				<Window className="inputWindow">
					{/* <Bar className="inputBar">Enter Transaction</Bar> */}
					<div class="title-bar">
						<div class="title-bar-text">Enter Transaction</div>
						<div class="title-bar-controls"></div>
					</div>
					<WindowContent className="windowContent">
						<form className="transactionForm" onSubmit={onSubmit}>
							<div className="formDiv">
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
							</div>
						</form>
					</WindowContent>
				</Window>
			</FormContainer>
		</Draggable>
	);
};

export { TransactionInput };
