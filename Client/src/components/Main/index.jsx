import styles from "./styles.module.css";
import Workout from "../workout";
const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
		console.log(localStorage.getItem('user-info'))
	};

	return (<>
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Gym Genie</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<Workout/>
		</div>
		
		</>
	);
};

export default Main;
