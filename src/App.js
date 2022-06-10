import "./styles/index.css";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { styleReset } from "react95";
import original from "react95/dist/themes/original";
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import EnterCoin from "./comps/CoinInput";
import AssetList from "./comps/List";

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

// NOTE Use this link for chart js https://react-chartjs-2.netlify.app/

const App = () => (
	<div className="App">
		<GlobalStyles />
		<ThemeProvider theme={original}>
			<div className="top-container">
				<EnterCoin />
			</div>
			<div className="bottom-container">
				<AssetList />
			</div>
		</ThemeProvider>
	</div>
);

export default App;
