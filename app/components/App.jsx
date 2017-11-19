import React, { Component } from 'react';
// import ReactRouter from 'react-router-dom';
const ReactRouter = require('react-router-dom');

// local imports
import Register from './Authentication/Register/Register.jsx';
import Login from './Authentication/Login/Login.jsx';
import Nav from './Nav.jsx';

const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;

export default class App extends Component {
	render() {
		return (
			<Router>
				<div className="container">
				<Nav />
					<Switch>
						<Route exact path='/login' component={Login} />
						<Route exact path='/register' component={Register} />
					</Switch>
				</div>
			</Router>
		);
	}
}
