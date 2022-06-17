import React from "react";
import { useState, useContext } from "react";
import { Formik, Field, Form } from "formik";
import { GlobalContext } from "../context/GlobalContext";
import "98.css";
import { Window, WindowContent, Button, Bar, Divider, Fieldset } from "react95";
import styled from "styled-components";

/* --------------------------------- Styles --------------------------------- */
const CoinInput = styled.div`
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
	.form {
		padding: 0;
	}
`;

// const Wrapper = styled.div`
// 	width: 50%;
// 	justify-content: center;
// 	align-items: center;

// 	.valueWindow {
// 		text-align: center;
// 		width: 100%;
// 	}
// 	.valueBar {
// 		text-align: center;
// 		height: 3rem;
// 		font-size: 2rem;
// 		width: 100%;
// 	}
// `;

// const App = styled.div`
// 	height: 100vh;
// 	display: flex;
// 	flex-direction: column;
// `;

/* ------------------------------------------------------------------------ */

const TransactionInput = () => {
	const { addTransaction } = useContext(GlobalContext);

	return (
		<CoinInput>
			{/* ANCHOR ASSET INPUT*/}
			<Window className="inputWindow">
				<Bar className="inputBar">ENTER VALUE</Bar>
				<WindowContent className="windowContent"></WindowContent>
			</Window>
		</CoinInput>
	);
};

//ReactDOM.render(<Basic />, document.getElementById("root"));

export { TransactionInput };
