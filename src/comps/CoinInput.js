import React from "react";
import { useState } from "react";
import { Formik, Field, Form } from "formik";
import "98.css";
import { useValue } from "../hooks/useValue";
import List from "../hooks/useList";
import { Window, WindowContent, Button, Bar, Divider, Fieldset } from "react95";
import styled from "styled-components";

/* --------------------------------- Styles --------------------------------- */
const CoinInput = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 30%;
	background-color: lightyellow;
	.inputWindow {
		height: 100%;
		background-color: green;
		padding: 0;
		.windowContent {
			background: pink;
		}
	}
	.inputBar {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 3rem;
		width: 100%;
	}
	.form {
		background-color: green;
		padding: 0;
	}
`;

const Wrapper = styled.div`
	width: 50%;
	justify-content: center;
	align-items: center;

	.valueWindow {
		text-align: center;
		width: 100%;
	}
	.valueBar {
		text-align: center;
		height: 3rem;
		font-size: 2rem;
		width: 100%;
	}
`;

const BottomCont = styled.div`
	background: #0000ff;
	width: 100%;
	height: 70%;
`;

const App = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
`;

const Main = styled.div`
	display: flex;
	width: 50%;
	justify-content: center;
	height: 100%;
	background-color: coral;
	.recordWindow {
		width: 80%;
	}
	.recordBar {
		width: 100%;
		height: 4rem;
	}
`;

/* ------------------------------------------------------------------------ */
const TotalAssets = [];
const assets = [{}];

const EnterCoin = () => {
	const [currentValue, sum] = useValue();

	return (
		<App>
			<CoinInput>
				{/*ANCHOR TOTAL VALUE  */}
				<Wrapper>
					<Window className="valueWindow">
						<Bar className="valueBar">TOTAL VALUE</Bar>
						<WindowContent>$ {currentValue}</WindowContent>
					</Window>
				</Wrapper>

				{/* ANCHOR ASSET INPUT*/}
				<Window className="inputWindow">
					<Bar className="inputBar">ENTER VALUE</Bar>
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
								console.log(assets);
								sum();
							}}
						>
							<Form>
								<div class="field-row">
									<label htmlFor="title" for="text17">
										TITLE:
									</label>
									<Field
										className="text"
										id="text17"
										type="text"
										name="title"
										placeholder=""
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
			</CoinInput>
			<BottomCont>
				<Main>
					<Window className="recordWindow">
						<Bar className="recordBar">RECORD</Bar>
						<WindowContent>
							<List />
						</WindowContent>
					</Window>
				</Main>
			</BottomCont>
		</App>
	);
};

//ReactDOM.render(<Basic />, document.getElementById("root"));

export { EnterCoin, TotalAssets, assets };
