import React from "react";
import { Panel, Window, WindowContent, Bar } from "react95";
import styled from "styled-components";

const Wrapper = styled.div`
	padding: 5rem;
	width: 50%;
	//background: ___CSS_0___;
	.window {
		width: 100%;
	}
	.bar {
		width: 100%;
	}
`;

const TotalValue = () => {
	return (
		<Wrapper>
			<Window className="window">
				<Bar className="bar">
					<h1>VALUE</h1>
				</Bar>
				{/* <Panel
					variant="inside"
					shadow
					style={{
						padding: "0.5rem",
						lineHeight: "1.5",
						width: "100%",
						height: "2em",
					}}
				>
					<h1>VALUE</h1>
				</Panel> */}
				<WindowContent>
					<h1>$2500</h1>
					{/* NOTE UseState to change this when a new coin is added */}
				</WindowContent>
			</Window>
		</Wrapper>
	);
};

export default TotalValue;
