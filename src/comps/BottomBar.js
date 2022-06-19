import React from "react";
import "98.css";
import { Divider } from "react95";
import styled from "styled-components";

const Wrapper = styled.div`
	width: 100%;
	position: fixed;
	bottom: 0;
	.window {
		height: 2rem;
		width: 100%;
	}
	.window-body {
		font-size: larger;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}
`;

const BottomBar = () => {
	const time = new Date();

	return (
		<>
			<Wrapper>
				<div class="window">
					<div class="window-body">
						<div class="time">{time}</div>
					</div>
				</div>
			</Wrapper>
		</>
	);
};

export default BottomBar;
