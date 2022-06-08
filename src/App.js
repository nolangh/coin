import "./index.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EnterCoin from "./comps/CoinInput";

function App() {
	return (
		<div className="App">
			<div className="top container">
				<div className="total-container">
					<div className="total-container_title">
						<h3>VALUE</h3>
					</div>
				</div>
				<EnterCoin />
			</div>
		</div>
	);
}

export default App;
