import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// local imports
import Register from './Authentication/Register/Register.jsx';
import Login from './Authentication/Login/Login.jsx';
import Nav from './Nav.jsx';
import Bucketlist from './Bucketlists/Bucketlist.jsx'
import {isAuthenticated} from '../utils';

export default class App extends Component {
	render() {
		return (
			<Router>
				<div className="container">
				<Nav />
					<Switch>
						<Route exact path='/login' component={Login} />
						<Route exact path='/register' component={Register} />
						<Route exact path='/bucketlists' 
							render= {()=> isAuthenticated() ? (<Bucketlist/>): (<Redirect to={{pathname: '/login'}}/>)}/>
					</Switch>
				</div>
			</Router>
		);
	}
}
