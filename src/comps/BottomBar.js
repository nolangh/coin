import React from "react";
import "98.css";
import styled from "styled-components";
import Time from "./setTime";

const Wrapper = styled.div`
	width: 100%;
	position: fixed;
	bottom: 0;
	.window {
		display: flex;
		align-items: center;
		padding-top: 0.5em;
		font-size: x-large;
		justify-content: flex-end;
		height: 2rem;
		width: 100%;
	}
	.window-body {
		margin-right: 2rem;
	}
`;

const BottomBar = () => {
	return (
		<>
			<Wrapper>
				<div class="window">
					<div class="window-body">
						<Time />
					</div>
				</div>
			</Wrapper>
		</>
	);
};

export default BottomBar;
