import React, { useState } from "react";
import { Window, WindowContent, Bar } from "react95";
import styled from "styled-components";
import { assets } from "./CoinInput";

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
const TotalAssets = [];
assets.forEach(() => {
	let totalAmount = assets.amount;
	TotalAssets.push(totalAmount);
	console.log(TotalAssets);
});

const TotalValue = () => {
	const [currentValue, setCurrentValue] = useState(0);

	return (
		<Wrapper>
			<Window className="window">
				<Bar className="bar">VALUE</Bar>
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
				<WindowContent>${currentValue}</WindowContent>
			</Window>
		</Wrapper>
	);
};

export default TotalValue;
