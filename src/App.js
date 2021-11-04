import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import Landing from "./components/Main/Landing";
import BoxBreathing from "./components/Exercises/BoxBeathing/BoxBreathing";
import CoherentBreathing from "./components/Exercises/CoherentBreathing/CoherentBreathing";
import FourSevenBreathing from "./components/Exercises/FourSevenBreathing/FourSevenBreathing";
import NavBar from "./components/Header/NavBar";

function App() {
	return (
		<>
			<HashRouter>
				<NavBar />

				<Switch>
					<Route exact path='/' component={Landing} />
					<Route exact path='/box' component={BoxBreathing} />
					<Route exact path='/coherent' component={CoherentBreathing} />
					<Route exact path='/four-seven' component={FourSevenBreathing} />
				</Switch>
			</HashRouter>
		</>
	);
}

export default App;
