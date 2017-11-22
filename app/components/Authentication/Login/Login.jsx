import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			isLoggedIn: false
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		let value = event.target.value;
		this.setState({
			[event.target.name]: value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		axios.post('https://pitlist.herokuapp.com/api/v1/login',
			{
				email: this.state.email,
				password: this.state.password
			}
		)
			.then((response) => {
				localStorage.setItem('currentUser', JSON.stringify(response.data))			
				this.setState({
					isLoggedIn: true
				})
			})
			.catch((error) => {
				console.log(error.response)
			})
	}

	render() {
		if(this.state.isLoggedIn) {
			return (
				<Redirect to="/bucketlists"/>
			)
		}
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text"
					name="email"
					placeholder="Enter email"
					value={this.state.email}
					onChange={this.handleChange}
				/>
				<input type="password"
					name="password"
					placeholder="Enter password"
					value={this.state.password}
					onChange={this.handleChange}
				/>
				<button
					type="submit"
					disabled={
						!this.state.email ||
						!this.state.password}
				>
					Login
				</button>
			</form>
		);
	}
}
