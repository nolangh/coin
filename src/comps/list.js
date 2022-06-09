import { assets } from "./CoinInput";
import styled from "styled-components";
import { Window, Bar, WindowContent } from "react95";
import React from "react";

const Main = styled.div`
	display: flex;
	width: 50%;
	height: 100%;
	background-color: coral;
`;

const AssetList = () => {
	return (
		<Main>
			<Window>
				<Bar>ASSETS</Bar>
				<WindowContent>
					<h1>placeholder</h1>
				</WindowContent>
			</Window>
		</Main>
	);
};

export default AssetList;
