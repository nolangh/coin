import React from "react";
import { Formik, Field, Form } from "formik";
import { Window, WindowContent, TextField, NumberField, Button } from "react95";
import styled from "styled-components";

const CoinInput = styled.div`
	width: 50%;
	padding: 5rem;
`;

const EnterCoin = () => (
	<Window>
		<WindowContent>
			<CoinInput>
				<h1>ENTER COIN</h1>
				<Formik
					coinValues={{
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
						<TextField id="coin" name="coin" placeholder="COIN" />

						<label htmlFor="amount">AMOUNT:</label>
						<NumberField id="amount" name="amount" placeholder="0" />

						<Button type="submit">ADD COIN</Button>
					</Form>
				</Formik>
			</CoinInput>
		</WindowContent>
	</Window>
);

//ReactDOM.render(<Basic />, document.getElementById("root"));

export default EnterCoin;
