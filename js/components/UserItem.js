import React, { Component } from 'react';

export default class UserItem extends Component {
	handleClick() {
		console.log(this.props.name);
	}

	render() {
		let imagePath = '/images/' + this.props.user.image + '.svg';
		return (
			<tr onClick={() => this.props.onItemClick(this.props.user)}>
				<td><img className="user-image" src={imagePath} /></td>
				<td>{this.props.user.name}</td>
				<td>{this.props.user.age}</td>
				<td>{this.props.user.phone}</td>
			</tr>
			
		);
	}
}