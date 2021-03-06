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
import Note from "./comps/Note";
import BottomBar from "./comps/BottomBar";

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

const App = () => (
	<div className="App">
		<GlobalProvider>
			<GlobalStyles />
			<ThemeProvider theme={original}>
				<TotalValue />
				<TransactionInput />
				<AssetList />
				<Note />
				<BottomBar />
			</ThemeProvider>
		</GlobalProvider>
	</div>
);

export default App;
