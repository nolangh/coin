import React from "react";
import { useState } from "react";
import { Formik, Field, Form } from "formik";
import "98.css";
import { useValue } from "../hooks/useValue";
import { useList } from "../hooks/useList";
import { Window, WindowContent, Button, Bar, Divider, Fieldset } from "react95";
import styled from "styled-components";

/* --------------------------------- Styles --------------------------------- */
const CoinInput = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 30%;
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
	.window {
		width: 80%;
	}
	.bar {
		width: 100%;
		height: 4rem;
	}
`;

const ListDiv = styled.div`
	width: 100%;
	height: 3rem;
`;

/* ------------------------------------------------------------------------ */

const TotalAssets = [];
const assets = [{}];

const EnterCoin = () => {
	const [currentValue, sum] = useValue();
	const [list, setUpdate] = useList();

	return (
		<App>
			<CoinInput>
				{/*ANCHOR TOTAL VALUE  */}
				<Wrapper>
					<Window className="window">
						<Bar className="bar">TOTAL VALUE</Bar>
						<WindowContent>$ {currentValue}</WindowContent>
					</Window>
				</Wrapper>

				{/* ANCHOR ASSET INPUT*/}
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
								console.log(assets);
								sum();
								setUpdate();
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

								<Button onClick={setUpdate} type="submit">
									ENTER
								</Button>
							</Form>
						</Formik>
					</WindowContent>
				</Window>
			</CoinInput>
			<BottomCont>
				<Main>
					<Window className="window">
						<Bar className="bar">RECORD</Bar>
						<WindowContent>{list}</WindowContent>
					</Window>
				</Main>
			</BottomCont>
		</App>
	);
};

//ReactDOM.render(<Basic />, document.getElementById("root"));

export { EnterCoin, TotalAssets, assets };
