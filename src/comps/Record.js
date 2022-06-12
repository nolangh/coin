import { assets } from "./CoinInput";
import styled from "styled-components";
import { Window, Bar, WindowContent, Fieldset } from "react95";
import React from "react";
import "98.css";

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

const AssetList = () => {
	const list = assets.map((element) => {
		return <Fieldset label={assets.title}>{assets.number}</Fieldset>;
	});

	return (
		<Main>
			<Window className="window">
				<Bar className="bar">RECORD</Bar>
				<WindowContent>{list}</WindowContent>
			</Window>
		</Main>
	);
};

export default AssetList;
