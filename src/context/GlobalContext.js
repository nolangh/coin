import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const inititalState = {
	transactions: [
		{ id: 1, text: "Flower", amount: -20 },
		{ id: 2, text: "Salary", amount: 300 },
		{ id: 3, text: "Book", amount: -10 },
		{ id: 4, text: "Camera", amount: 150 },
	],
};

export const GlobalContext = createContext(inititalState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, inititalState);

	function deleteTransaction(id) {
		dispatch({
			type: "DELETE",
			payload: id,
		});
	}

	function addtransaction(transaction) {
		dispatch({
			type: "ADD",
			payload: transaction,
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransaction,
				addtransaction,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
