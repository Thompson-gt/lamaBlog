import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
	const [inputs, setInputs] = useState({
		username: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState(null);
	const handleChange = (e) => {
		//this is the syntax to handle all changes in one function,
		//we create a object with the elements name as the key and the value is the  passed as the values to element
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			//i can use fetch to achive the same result just using axios for simplicy
			// 			fetch('url', {
			//   Method: 'POST',
			//   Headers: {
			//     Accept: 'application.json',
			//     'Content-Type': 'application/json'
			//   },
			//   Body: inputs,
			//   Cache: 'default'})
			await axios.post("/auth/register", inputs);
			navigate("/login");
		} catch (error) {
			setError(error.response.data.message);
		}
	};
	return (
		<div className="auth">
			<h1>Register</h1>
			<form>
				<input
					required
					type="text"
					placeholder="username"
					name="username"
					onChange={handleChange}
				/>
				<input
					required
					type="email"
					placeholder="email"
					name="email"
					onChange={handleChange}
				/>
				<input
					required
					type="password"
					placeholder="password"
					name="password"
					onChange={handleChange}
				/>
				<button onClick={handleSubmit}>Register</button>
				{error && <p>{error}</p>}
				<span>
					Do you have a account? <Link to="/login">Login</Link>
				</span>
			</form>
		</div>
	);
};

export default Register;
