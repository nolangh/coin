import React from "react";
import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "98.css";
import { Window, WindowContent, Divider } from "react95";
import styled from "styled-components";
import Draggable from "react-draggable";

/* --------------------------------- Styles --------------------------------- */
const FormContainer = styled.div`
	height: 20%;
	width: 100%;

	padding: 0;
	margin: 0;
	.title-bar-text {
		font-size: x-large;
		text-align: center;
	}
	.inputWindow {
		cursor: grab;
		width: 30rem;
		.amountInput {
			margin: 1rem;
		}
		.titleInput {
			margin: 1rem;
		}

		.title-bar {
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.btn-cont {
			display: flex;
			margin-top: 2rem;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			.btn {
				width: 100%;
			}
		}
	}
`;

/* ------------------------------------------------------------------------ */

const TransactionInput = () => {
	const [text, setText] = useState("");
	const [amount, setAmount] = useState();
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
			<Draggable bounds="body">
				<Window className="inputWindow">
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
										required
										value={text}
										onChange={(e) => setText(e.target.value)}
										placeholder="Enter Title"
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
										required
										placeholder="use - for expense"
										defaultValue={amount}
										onChange={(e) => setAmount(e.target.value)}
									/>
								</div>
								<div className="btn-cont">
									<button className="btn">Submit</button>
								</div>
							</div>
						</form>
					</WindowContent>
				</Window>
			</Draggable>
		</FormContainer>
	);
};

export { TransactionInput };
