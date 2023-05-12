import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
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
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<br></br>
						<label type="submit" className="">
							Have an account already?  <Link to="/login">Sign In</Link>
						</label>
						<br/>
						<label  >First Name</label>
						<input
							type="text"
							placeholder=""
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className={styles.input}
						/>
						<label className="label_top">Last Name</label>
						<input
							type="text"
							placeholder=""
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className={styles.input}
						/>
						<label className="label_top">Email</label>
						<input
							type="email"
							placeholder=""
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<label className="label_top">Password</label>
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
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
