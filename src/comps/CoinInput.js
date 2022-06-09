import React from "react";
import { Formik, Field, Form } from "formik";
import "98.css";
import { Window, WindowContent, Button, Bar, Divider } from "react95";
import styled from "styled-components";

/* --------------------------------- Styles --------------------------------- */
const CoinInput = styled.div`
	width: 30%;
	padding: 5rem;
	background-color: lightyellow;
	.form {
		display: flex;
		flex-direction: column;
		background-color: green;
	}

	.bar {
		width: 100%;
	}
`;

/* ------------------------------------------------------------------------ */

const assets = [{}];

const EnterCoin = () => (
	<CoinInput>
		<Window className="window">
			<Bar className="bar">ENTER COIN</Bar>
			<WindowContent className="windowContent">
				<Formik
					className="form"
					initialValues={{
						coin: "",
						amount: "",
					}}
					onSubmit={async (values) => {
						await new Promise((r) => setTimeout(r, 500));
						// TODO - Change this to push the coin and amount to the main coin list
						assets.push(JSON.stringify(values, null, 2));
						console.log(assets);
					}}
				>
					<Form>
						<div class="field-row">
							<label htmlFor="coin" for="text17">
								COIN:
							</label>
							<Field
								className="text"
								//id="coin"
								id="text17"
								type="text"
								name="coin"
								placeholder="COIN"
							/>
						</div>

						<Divider />
						<div class="field-row-stacked">
							<label for="text24" htmlFor="amount">
								AMOUNT:
							</label>
							<Field
								className="number"
								id="text24"
								type="number"
								value="0"
								name="amount"
								placeholder="0"
							/>
						</div>

						<Button type="submit">ADD COIN</Button>
					</Form>
				</Formik>
			</WindowContent>
		</Window>
	</CoinInput>
);

//ReactDOM.render(<Basic />, document.getElementById("root"));

export default EnterCoin;
