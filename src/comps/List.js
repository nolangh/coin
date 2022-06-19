import React, { useContext } from "react";
import Draggable from "react-draggable";
import { Window, WindowContent } from "react95";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalContext";
import { Transaction } from "./Transaction";

const Main = styled.div`
	height: 20%;
	width: 100%;
	margin: 0;
	padding: 0;
	.title-bar {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: x-large;
		width: 100%;
		height: 2.5rem;
	}
	.recordWindow {
		font-size: 2em;
		width: 30rem;
	}
`;

const AssetList = () => {
	const { transactions } = useContext(GlobalContext);

	return (
		<Main>
			<Draggable bounds="body">
				<Window className="recordWindow">
					<div class="title-bar">
						<div class="title-bar-text">Transactions</div>
					</div>
					<WindowContent className="recordContent">
						<ul>
							{transactions.map((transaction) => (
								<Transaction key={transaction.id} transaction={transaction} />
							))}
						</ul>
					</WindowContent>
				</Window>
			</Draggable>
		</Main>
	);
};

export default AssetList;
