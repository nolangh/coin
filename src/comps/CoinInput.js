import React from "react";
import { Formik, Field, Form } from "formik";
import styled from "styled-components";

const CoinInput = styled.div`
	background-color: coral;
	width: 50%;
`;

const EnterCoin = () => (
	<CoinInput>
		<h1>ENTER COIN</h1>
		<Formik
			initialValues={{
				coin: "",
				amount: "",
			}}
			onSubmit={async (values) => {
				await new Promise((r) => setTimeout(r, 500));
				//TODO - Change this to push the coin and amount to the main coin list
				alert(JSON.stringify(values, null, 2));
			}}
		>
			<Form>
				<label htmlFor="coin">COIN:</label>
				<Field id="coin" name="coin" placeholder="COIN" />

				<label htmlFor="amount">AMOUNT:</label>
				<Field id="amount" name="amount" placeholder="0" />

				<button type="submit">ADD COIN</button>
			</Form>
		</Formik>
	</CoinInput>
);

//ReactDOM.render(<Basic />, document.getElementById("root"));

export default EnterCoin;
