import React from "react";
import { useEffect } from "react";
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
const TotalAssets = [];
const arraySum = TotalAssets.reduce(
	(previousValue, currentValue) => previousValue + currentValue
);

console.log(arraySum);
// const sum = 0;

const EnterCoin = () => {
	return (
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
							assets.push(JSON.stringify(values, null, 2));
							TotalAssets.push(values.amount);
							console.log(TotalAssets);
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
};

//ReactDOM.render(<Basic />, document.getElementById("root"));

export { EnterCoin, arraySum };
