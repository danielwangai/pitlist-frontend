import React, { Component } from 'react';

const NavLink = require('react-router-dom').NavLink;

export default class Nav extends Component {
	render() {
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
}
