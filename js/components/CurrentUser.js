import React, { Component } from 'react';

export default class CurrentUser extends Component {
	render() {
		let imagePath = '/images/' + this.props.user.image + '.svg';
		return (
			<div className="thumbnail">
				<img src={imagePath} title={this.props.user.image} />
				<h3>{this.props.user.name}</h3>
				<p>Age: {this.props.user.age}</p>
				<p>Favourite animal: {this.props.user.image}</p>
				<p>Phone: {this.props.user.phone}</p>
				<p>Favourite phrase: {this.props.user.phrase}</p>
			</div>
		);
	}
}