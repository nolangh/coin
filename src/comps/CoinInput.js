import React from "react";
import { Formik, Field, Form } from "formik";
import {
	Window,
	WindowContent,
	TextField,
	NumberField,
	Button,
	Bar,
	Divider,
} from "react95";
import styled from "styled-components";

const CoinInput = styled.div`
	width: 50%;
	padding: 5rem;
	form {
		display: flex;
		flex-direction: column;
		background-color: green;
	}
	
	.bar {
		width: 100%;
	}
	.text {
		width: 25%;
		height: 1rem;
	}
	.number {
		width: 10%;
	}
`;

const EnterCoin = () => (
	<CoinInput>
		<Window>
			<Bar className="bar">
				<h1>ENTER COIN</h1>
			</Bar>
			<WindowContent>
				<Formik
					className="form"
					initialValues={{
						coin: "",
						amount: "",
					}}
					onSubmit={async (values) => {
						await new Promise((r) => setTimeout(r, 500));
						// TODO - Change this to push the coin and amount to the main coin list
						alert(JSON.stringify(values, null, 2));
					}}
				>
					<Form>
						<label htmlFor="coin">COIN:</label>
						<TextField
							className="text"
							id="coin"
							name="coin"
							placeholder="COIN"
						/>
						<Divider />

						<label htmlFor="amount">AMOUNT:</label>
						<NumberField
							className="number"
							id="amount"
							name="amount"
							placeholder="0"
						/>

						<Button type="submit">ADD COIN</Button>
					</Form>
				</Formik>
			</WindowContent>
		</Window>
	</CoinInput>
);

//ReactDOM.render(<Basic />, document.getElementById("root"));

export default EnterCoin;
