import { assets } from "./CoinInput";
import styled from "styled-components";
import { Window, Bar, WindowContent } from "react95";
import React from "react";
import "98.css";

const Main = styled.div`
	display: flex;
	width: 50%;
	height: 100%;
	background-color: coral;

	.bar {
		width: 100%;
		height: 3rem;
	}
`;

const AssetList = () => {
	return (
		<Main>
			<Window>
				<Bar className="bar">RECORD</Bar>
				<WindowContent>
					<h1>placeholder</h1>
				</WindowContent>
			</Window>
		</Main>
	);
};

export default AssetList;
