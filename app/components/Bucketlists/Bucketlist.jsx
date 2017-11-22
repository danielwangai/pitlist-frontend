import React, { Component } from 'react';
import axios from 'axios';

// import styles
import './bucketlist.scss';


function ListAllBuckets(props) {
	return (
		<ul className="all-buckets">
			{props.buckets.map((bucket) => {
				return (
					<li key={bucket._id} className="single-bucket">{bucket.name}</li>
				)
			})}
		</ul>
	)
}

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
					<ListAllBuckets buckets={this.state.bucketlists} />
			)
		}
		return (
				<div>
					Loading
				</div>
			);
	}
}
