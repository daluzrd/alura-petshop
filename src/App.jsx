import React from "react";
import "./assets/css/base/base.css";
import Home from "./paginas/Home.jsx";
import Sobre from "./paginas/Sobre.jsx";

function App() {
	const Router = () => {
		const location = window.location.pathname;
		return location === "/sobre" ? <Sobre /> : <Home />;
	};
	return <>{Router()}</>;
}

export default App;
