import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Login = () => {
	const [inputs, setInputs] = useState({
		username: "",
		password: "",
	});
	const [error, setError] = useState(null);
	const handleChange = (e) => {
		//this is the syntax to handle all changes in one function,
		//we create a object with the elements name as the key and the value is the  passed as the values to element
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	const navigate = useNavigate();
	const { login } = useContext(AuthContext);
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
			await login(inputs);
			navigate("/");
		} catch (error) {
			setError(error.response.data.message);
		}
	};
	return (
		<div className="auth">
			<h1>Login</h1>
			<form>
				<input
					type="text"
					placeholder="username"
					name="username"
					onChange={handleChange}
				/>
				<input
					type="password"
					placeholder="password"
					name="password"
					onChange={handleChange}
				/>
				<button onClick={handleSubmit}>Login</button>
				{error && <p>{error}</p>}
				<span>
					Don't have a account? <Link to="/register">Register</Link>
				</span>
			</form>
		</div>
	);
};

export default Login;
