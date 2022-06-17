import React, { useState, useContext } from "react";
import {
	Window,
	WindowContent,
	Bar,
	Tab,
	Tabs,
	TabBody,
	Fieldset,
	NumberField,
	Checkbox,
} from "react95";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalContext";
import { useValue } from "../hooks/useValue";

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
		background-color: #060084;
		color: #ffffff;
		height: 3rem;
		font-size: 2rem;
		width: 100%;
	}
`;

const TotalValue = () => {
	// ANCHOR Tab switching
	const [state, setState] = useState({
		activeTab: 0,
	});
	const handleChange = (e, value) => setState({ activeTab: value });
	const { activeTab } = state;

	const { transactions } = useContext(GlobalContext);
	const amounts = transactions.map((transaction) => transaction.amount);
	const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

	const income = amounts
		.filter((item) => item > 0)
		.reduce((acc, item) => (acc += item), 0)
		.toFixed(2);

	const expense = (
		amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
		-1
	).toFixed(2);

	return (
		<Wrapper>
			<Window className="valueWindow">
				<Bar className="valueBar">$$$$$</Bar>
				<WindowContent>
					<Tabs value={activeTab} onChange={handleChange}>
						<Tab value={0}>Total value</Tab>
						<Tab value={1}>Income</Tab>
						<Tab value={2}>expenses</Tab>
					</Tabs>
					<TabBody style={{ height: 300 }}>
						{activeTab === 0 && (
							<div>
								<Fieldset label="Total Value:">
									<div style={{ padding: "0.5em 0 0.5em 0" }}>
										<h1>${total}</h1>
									</div>
									<br />
								</Fieldset>
							</div>
						)}
						{activeTab === 1 && (
							<div>
								<div>
									<h3>+${income}</h3>
								</div>
							</div>
						)}
						{activeTab === 2 && (
							<div>
								<div>-${expense}</div>
							</div>
						)}
					</TabBody>
				</WindowContent>
			</Window>
		</Wrapper>
	);
};
export default TotalValue;
