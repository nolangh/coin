import "./styles/index.css";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import styled from "styled-components";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { styleReset } from "react95";
import original from "react95/dist/themes/original";
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import { GlobalProvider } from "./context/GlobalContext";
import AssetList from "./comps/List";
import { TransactionInput } from "./comps/TransactionInput";
import TotalValue from "./comps/Total";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`;

const TopContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 30%;
	background-color: lightyellow;
`;

const BottomContainer = styled.div`
	background: blue;
	width: 100%;
	height: 70%;
`;

const AppDiv = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
`;

const App = () => (
	<AppDiv className="App">
		<GlobalProvider>
			<GlobalStyles />
			<ThemeProvider theme={original}>
				{/* Top Half */}
				<TotalValue />
				<TransactionInput />
				{/* Bottom Half */}
				<AssetList />
			</ThemeProvider>
		</GlobalProvider>
	</AppDiv>
);

export default App;
