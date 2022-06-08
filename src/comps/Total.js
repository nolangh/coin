import React from "react";
import { AppBar, Window, WindowContent, WindowHeader } from "react95";
import styled from "styled-components";

const Wrapper = styled.div`
	padding: 5rem;
	//background: ___CSS_0___;
`;

const TotalValue = () => {
	return (
		<div className="Value">
			<Wrapper>
				<Window>
					<WindowHeader>
						<AppBar>
							<h1>VALUE</h1>
						</AppBar>
					</WindowHeader>
					<WindowContent>
						<h1>$2500</h1>
						{/* NOTE UseState to change this when a new coin is added */}
					</WindowContent>
				</Window>
			</Wrapper>
		</div>
	);
};

export default TotalValue;
