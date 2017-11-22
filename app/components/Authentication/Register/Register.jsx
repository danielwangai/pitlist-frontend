import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

// local imports

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
			registerationSuccesful: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit  = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		let value = event.target.value;
		this.setState({
			[event.target.name]: value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		axios.post('https://pitlist.herokuapp.com/api/v1/register',
			{
				username: this.state.username,
				email: this.state.email,
				password: this.state.password
			}
		).then((user) =>{
			// redirect user to login
			// console.log("NEW USER\n\n", user.data.data)
			// console.log("NEW USER\n\n", user.status)
			this.setState({
				registerationSuccesful: true
			})
		}).catch(e=>{
			console.log(e.response.status)
			return e.response.status
		})
	}

	render() {
		if(this.state.registerationSuccesful){
			return (
				<Redirect  to="/login"/>
			)
		}
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input type="text"
						name="username"
						placeholder="Enter username"
						value={this.state.username}
						onChange={this.handleChange}
					/>
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
							!this.state.username ||
							!this.state.email ||
							!this.state.password}
					>
						Register
					</button>

				</form>
			</div>
		);
	}
}
