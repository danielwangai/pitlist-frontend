import React, { Component } from 'react';
import axios from 'axios';

export default class Bucketlist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bucketlists: []
		}
		this.fetchBucketlists = this.fetchBucketlists.bind(this);
	}
	componentDidMount() {
		this.fetchBucketlists();
	}
	fetchBucketlists() {
		const currentUser = localStorage.getItem('currentUser');
		axios.get(
			'https://pitlist.herokuapp.com/api/v1/bucketlists',
			{
				headers: {
					'Content-Type': 'application/json',
					'access-token': JSON.parse(currentUser).token
				}
			}
		)
			.then((response) => {
				// update state with fetched bucketlists
				this.setState(() => {
					return {
						bucketlists: response.data.data.bucketlists
					}
				})
			})
			.catch((error) => {
				console.log(error.response)
				return error.response
			})
	}
	render() {
		if(this.state.bucketlists.length > 0) {
			return(
					this.state.bucketlists.map((bucket) => {
						return (
							<div key={bucket._id}>
								<b>{bucket.name}</b>
								<p>{bucket.description}</p>
							</div>
						)
					})
			)
		}
		return (
				<div>
					Loading
				</div>
			);
	}
}
