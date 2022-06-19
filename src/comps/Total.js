import React, { useState, useContext } from "react";
import Draggable from "react-draggable";
import { Window, WindowContent, Tab, Tabs, TabBody, Fieldset } from "react95";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalContext";

const Wrapper = styled.div`
	width: 50%;
	justify-content: center;
	align-items: center;
	.page-one {
	}
	.page-two {
	}
	.page-three {
	}

	/* .valueWindow {
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
	} */
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
			<Draggable>
				<Window className="valueWindow">
					<div class="title-bar">
						<div class="title-bar-text">Enter Transaction</div>
					</div>
					<WindowContent>
						<Tabs value={activeTab} onChange={handleChange}>
							<Tab value={0}>Total value</Tab>
							<Tab value={1}>Income</Tab>
							<Tab value={2}>expenses</Tab>
						</Tabs>
						<TabBody style={{ height: 300 }}>
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
