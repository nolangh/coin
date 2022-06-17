import React, { useContext } from "react";
import { Window, WindowContent, Bar, Button } from "react95";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalContext";
import { Transaction } from "./Transaction";

const Main = styled.div`
	display: flex;
	width: 50%;
	height: 100%;
	justify-content: center;
	background-color: coral;
	.recordBar {
		width: 100%;
		height: 4rem;
	}
	.recordWindow {
		width: 80%;
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
				<WindowContent className="recordContent">
					<ul>
						{transactions.map((transaction) => (
							<Transaction key={transaction.id} transaction={transaction} />
						))}
					</ul>
				</WindowContent>
			</Window>
		</Main>
	);
};

export default AssetList;
