import React, { Component } from 'react';
import axios from 'axios';

import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

// local imports
import BucketlistDetail from './BucketlistDetail.jsx';
import AddBucketModal from './AddBucketModal.jsx';

// import styles
import './bucketlist.scss';

function ListAllBuckets(props) {
	return (
		<ul className="all-buckets">
			{props.buckets.map((bucket) => {
				return (
					<li key={bucket._id} className="single-bucket" onClick={() => props.onSelect(bucket._id)}>{bucket.name}</li>
				)
			})}
		</ul>
	)
}

function ListBucketlistItems(props) {
	return (
		<ul className="bucketlist-items">
			Items
		</ul>
	)
}

function CreateBucket(props) {
	const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          Only actions can close this dialog.
        </Dialog>
      </div>
    );
}

export default class Bucketlist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bucketlists: [],
			open: false,
			bucketName: "",
			bucketDescription: "",
		}
		this.fetchBucketlists = this.fetchBucketlists.bind(this);
		this.fetchSingleBucketlist = this.fetchSingleBucketlist.bind(this);
		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.createBucket = this.createBucket.bind(this);
	}

	handleChange(event) {
		let value = event.target.value;
		this.setState({
			[event.target.name]: value
		});
	}

	handleOpen() {
		this.setState({open: true});
	};

	handleClose() {
		this.setState({open: false});
	};

	componentDidMount() {
		this.fetchBucketlists();
	}

	createBucket() {
		// to create a bucketlist
		const currentUser = JSON.parse(localStorage.getItem('currentUser'));
		console.log("current user \n\n", currentUser.token)
		console.log("current user \n\n", (typeof currentUser))
		axios.post(
			'https://pitlist.herokuapp.com/api/v1/bucketlists',
			{
				name: this.state.bucketName,
				description: this.state.bucketDescription
			},
			{
				headers: {
					'Content-Type': 'application/json',
					'access-token': currentUser.token
				}
			}
		)
			.then((response) => {
				console.log("POST RESPONSE\n\n", response)
				this.fetchBucketlists()
				return response
			})
			.catch((error) => {
				console.log("ERROR\n\n", error.response)
				return error.response
			})
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

	fetchSingleBucketlist(bucketlistId) {
		const currentUser = localStorage.getItem('currentUser');
		axios.get('https://pitlist.herokuapp.com/api/v1/bucketlists/'+ bucketlistId,
			{
				headers: {
					'Content-Type': 'application/json',
					'access-token': JSON.parse(currentUser).token
				}
			}
		)
			.then((response) => {
				console.log("Bucket + Items\n\n", response)
			})
			.catch((error) => {
				console.log(error.response)
				return error.response
			})
	}
	render() {
		if(this.state.bucketlists.length > 0) {
			return(
				<div className="bucketlists">
					<div className="bucket-sidebar">
						<div className="new-bucket" onClick={this.handleOpen}>
							<AddBucketModal status={this.state.open} handleOpen={this.handleOpen} handleClose={this.handleClose} handleChange={this.handleChange} createBucket={this.createBucket} />
						</div>
						<ListAllBuckets buckets={this.state.bucketlists} onSelect={this.fetchSingleBucketlist} />
					</div>
					
					<BucketlistDetail />
				</div>
			)
		}
		return (
				<div>
					Loading
				</div>
			);
	}
}
