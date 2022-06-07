import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import styled from "styled-components";

const EnterCoin = () => (
	<div>
		<h1>ENTER COIN</h1>
		<Formik
			initialValues={{
				coin: "",
				amount: "",
			}}
			onSubmit={async (values) => {
				await new Promise((r) => setTimeout(r, 500));
				alert(JSON.stringify(values, null, 2));
			}}
		>
			<Form>
				<label htmlFor="coin">COIN</label>
				<Field id="coin" name="coin" placeholder="COIN" />

				<label htmlFor="amount">AMOUNT</label>
				<Field id="amount" name="amount" placeholder="0" />

				<button type="submit">ADD COIN</button>
			</Form>
		</Formik>
	</div>
);

//ReactDOM.render(<Basic />, document.getElementById("root"));

export default EnterCoin;
