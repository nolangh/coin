import React from "react";
import "98.css";
import styled from "styled-components";
import { Tooltip, Button } from "react95";
import Time from "./setTime";

const Wrapper = styled.div`
	margin: 0;
	padding: 0;
	.window {
		width: 100%;
		position: fixed;
		bottom: 0;
		.window-body {
			display: flex;
			font-size: medium;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			margin: 0;
		}
	}
`;

const BottomBar = () => {
	return (
		<>
			<Wrapper>
				<div class="window">
					<div class="window-body">
						<Tooltip
							className="tip"
							text="All windows can be dragged"
							enterDelay={100}
							leaveDelay={500}
						>
							<Button>Tip</Button>
						</Tooltip>
						<Time className="time" />
					</div>
				</div>
			</Wrapper>
		</>
	);
};

export default BottomBar;
