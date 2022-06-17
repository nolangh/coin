import React, { useContext } from "react";
import Draggable from "react-draggable";
import { Window, WindowContent, Bar, Button } from "react95";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalContext";
import { Transaction } from "./Transaction";

const Main = styled.div`
	display: flex;
	height: 100%;
	justify-content: center;
	.title-bar {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2rem;
		width: 100%;
		height: 2.5rem;
	}
	.recordWindow {
		font-size: 2em;
		width: 60%;
	}
`;

const AssetList = () => {
	const { transactions } = useContext(GlobalContext);

	return (
		<Draggable>
			<Main>
				<Window className="recordWindow">
					<div class="title-bar">
						<div class="title-bar-text">Record</div>
						<div class="title-bar-controls"></div>
					</div>
					{/* <Bar className="recordBar">
						<h1>RECORD</h1>
					</Bar> */}
					<WindowContent className="recordContent">
						<ul>
							{transactions.map((transaction) => (
								<Transaction key={transaction.id} transaction={transaction} />
							))}
						</ul>
					</WindowContent>
				</Window>
			</Main>
		</Draggable>
	);
};

export default AssetList;
