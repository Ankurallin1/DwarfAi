import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Homepage from './components/HomePage.jsx'

function App() {
  const user = localStorage.getItem("token");

	return (
    
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
      <Route path="/" element={<Homepage/>}/>
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
