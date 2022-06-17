import { Window, WindowContent, Bar } from "react95";
import styled from "styled-components";
import { useValue } from "../hooks/useValue";

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
	return (
		<Main>
			<Window className="recordWindow">
				<Bar className="recordBar">RECORD</Bar>
				<WindowContent></WindowContent>
			</Window>
		</Main>
	);
};

export default AssetList;
