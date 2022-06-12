import React from "react";
import { useState } from "react";
import { Formik, Field, Form } from "formik";
import "98.css";
import { Window, WindowContent, Button, Bar, Divider } from "react95";
import styled from "styled-components";

/* --------------------------------- Styles --------------------------------- */
const CoinInput = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	padding: 5rem;
	background-color: lightyellow;
	.form {
		background-color: green;
		padding: 0;
	}

	.bar {
		height: 3rem;
		width: 100%;
	}
`;

const Wrapper = styled.div`
	padding: 5rem;
	width: 50%;
	background: ___CSS_0___;
	.window {
		text-align: center;
		width: 100%;
	}
	.bar {
		text-align: center;
		height: 3rem;
		font-size: 2rem;
		width: 100%;
	}
`;

/* ------------------------------------------------------------------------ */

const EnterCoin = () => {
	const assets = [{}];
	const TotalAssets = [];
	const [currentValue, setValue] = useState(0);

	return (
		<CoinInput>
			<Wrapper>
				<Window className="window">
					<Bar className="bar">TOTAL VALUE</Bar>
					{/* <Panel
					variant="inside"
					shadow
					style={{
						padding: "0.5rem",
						lineHeight: "1.5",
						width: "100%",
						height: "2em",
					}}
				>
					<h1>VALUE</h1>
				</Panel> */}
					<WindowContent>{currentValue}</WindowContent>
				</Window>
			</Wrapper>
			<Window className="window">
				<Bar className="bar">ENTER VALUE</Bar>
				<WindowContent className="windowContent">
					<Formik
						className="form"
						initialValues={{
							title: "",
							amount: "",
						}}
						onSubmit={async (values) => {
							await new Promise((r) => setTimeout(r, 500));
							assets.push(JSON.stringify(values, null, 2));
							TotalAssets.push(values.amount);
							console.log(TotalAssets);
							const sum = TotalAssets.reduce(function(sum, number) {
								const arraySum = sum + number;
								return arraySum;
							}, 0);

							console.log(sum);
							// useState to update TotalAssets when this is submited
						}}
					>
						<Form>
							<div class="field-row">
								<label htmlFor="coin" for="text17">
									TITLE:
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
									placeholder="$"
								/>
							</div>

							<Button type="submit">ENTER</Button>
						</Form>
					</Formik>
				</WindowContent>
			</Window>

			{/*ANCHOR TOTAL VALUE  */}
		</CoinInput>
	);
};

//ReactDOM.render(<Basic />, document.getElementById("root"));

export { EnterCoin };
