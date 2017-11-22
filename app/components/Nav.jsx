import React, { Component } from 'react';

const NavLink = require('react-router-dom').NavLink;

export default class Nav extends Component {
	constructor() {
		super();
		this.checkIsLoggedIn = this.checkIsLoggedIn.bind(this);
	}
	checkIsLoggedIn() {
		const userDetails = localStorage.getItem('currentUser');
		// console.log(userDetails, "User Details")
		return userDetails;
	}
	render() {
		if(!this.checkIsLoggedIn()) {
			return (
				<ul>
					<li>
						<NavLink exact activeClassName="active" to="/register">register</NavLink>
					</li>
					<li>
						<NavLink exact activeClassName="active" to="/login">login</NavLink>
					</li>
				</ul>
			)
		}
		return (
			<ul>
				<li>
					<NavLink exact activeClassName="active" to="/bucketlists">Bucketlists</NavLink>
				</li>
			</ul>
		)
	}
}
