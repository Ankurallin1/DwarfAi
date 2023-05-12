import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Sign In</h1>
						<br></br>

						<label type="submit" className="">
							Don't have an account?  <Link to="/signup">sign up</Link>
						</label>
						<br/>
						<label>Email</label>
						<input
							type="email"
							placeholder=""
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<label>Password</label>

						<input
							type="password"
							placeholder=""
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sign In
						</button>
					</form>
					<br/>
					<Link to="/">Forgot Password?</Link>
				</div>
				
			</div>
		</div>
	);
};

export default Login;
