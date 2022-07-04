import React, { useState, useContext } from "react";
import Draggable from "react-draggable";
import { Window, WindowContent, Tab, Tabs, TabBody, Fieldset } from "react95";
import "98.css";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalContext";

const Wrapper = styled.div`
	height: 20%;
	.valueWindow {
		cursor: grab;
		text-align: center;
		width: 30rem;
	}
	.title-bar {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.title-bar-text {
		font-size: large;
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
			<Draggable bounds="body">
				<Window className="valueWindow" class="window">
					<div className="title-bar">
						<div className="title-bar-text">Break Down</div>
					</div>
					<WindowContent class="window-body">
						<Tabs value={activeTab} onChange={handleChange}>
							<Tab value={0}>Total value</Tab>
							<Tab value={1}>Income</Tab>
							<Tab value={2}>expenses</Tab>
						</Tabs>
						<TabBody>
							{activeTab === 0 && (
								<div className="page-one">
									<Fieldset>
										<div style={{ padding: "0.5em 0 0.5em 0" }}>
											<h1>${total}</h1>
										</div>
										<br />
									</Fieldset>
								</div>
							)}
							{activeTab === 1 && (
								<div className="page-two">
									<Fieldset>
										<div>
											<h3>+ ${income}</h3>
										</div>
									</Fieldset>
								</div>
							)}
							{activeTab === 2 && (
								<div className="page-three">
									<Fieldset>
										<div>- ${expense}</div>
									</Fieldset>
								</div>
							)}
						</TabBody>
					</WindowContent>
				</Window>
			</Draggable>
		</Wrapper>
	);
};
export default TotalValue;
