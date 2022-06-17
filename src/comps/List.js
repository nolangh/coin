import React, { useContext } from "react";
import { Window, WindowContent, Bar, Button } from "react95";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalContext";

const Main = styled.div`
	display: flex;
	width: 50%;
	height: 70;
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

const AssetList = () => {
	const { transactions } = useContext(GlobalContext);

	return (
		<Main>
			<Window className="recordWindow">
				<Bar className="recordBar">
					<h2>RECORD</h2>
				</Bar>
				<WindowContent>
					<ul>
						{transactions.map((transaction) => (
							<li className="minus">
								<Button>X</Button>
								{transaction.text} <span>-{transaction.amount}</span>
							</li>
						))}
					</ul>
				</WindowContent>
			</Window>
		</Main>
	);
};

export default AssetList;
