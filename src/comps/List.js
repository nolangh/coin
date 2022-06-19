import React, { useContext } from "react";
import Draggable from "react-draggable";
import { Window, WindowContent, Bar, Button } from "react95";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalContext";
import { Transaction } from "./Transaction";

const Main = styled.div`
	display: flex;
	justify-content: center;
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
			<Draggable>
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
