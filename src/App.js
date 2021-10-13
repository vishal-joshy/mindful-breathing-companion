import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Landing from './components/Pages/Landing';
import BoxBreathing from './components/Pages/BoxBreathing';
import CoherentBreathing from './components/Pages/CoherentBreathing';
import FourSevenBreathing from './components/Pages/FourSevenBreathing';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Landing} />
        <Route exact path='/box' component={BoxBreathing}/>
        <Route exact path='/coherent' component={CoherentBreathing}/>
        <Route exact path='/four-seven' component={FourSevenBreathing}/>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
