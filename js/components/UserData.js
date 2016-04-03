import React, { Component } from 'react';
import UserItem from './UserItem';
import CurrentUser from './CurrentUser';



export default class UserData extends Component {
	constructor(props) {
		super(props);		
	}

	

	render() {
		return (
			<div className="row">
				<div className="col-md-4"><CurrentUser user={this.props.user} /></div>
				<div className="col-md-8">
					<table className="table table-bordered table-striped user-data">
						<thead>
							<tr>
								<th>Image</th>
								<th>Name</th>
								<th>Age</th>
								<th>Phone</th>
							</tr>
						</thead>
						<tbody>
							{this.props.userData.map((el, index) => {
								return <UserItem key={index} user={el} 
								onItemClick={this.props.onItemClick} />; // pass click handler as a prop; it will be used it UserItem with actual user
							})}
						</tbody>				
					</table>
				</div>
			</div>
			
		);
	}
}