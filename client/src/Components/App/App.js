import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Intro from '../Intro/Intro';
import Admin from '../Admin/Admin';

const App = () => {
	return (
		<div className="App">
			<Router>
				<Route exact path="/" component={Intro} />
				<Route exact path="/admin" component={Admin} />
			</Router>
		</div>
	);
};

export default App;
