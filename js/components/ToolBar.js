import React, { Component } from 'react';

export default class ToolBar extends Component {
	render() {
		return (
			<div className="toolbar row">
				<div className="col-md-12 form-group">
					<button className="name-sort btn btn-default" onClick={this.props.sortByName}>
						<i className={this.props.orderNameAsc ? 'fa fa-sort-alpha-asc' : 'fa fa-sort-alpha-desc'}></i>Sort by name
					</button>
					<button className="age-sort btn btn-default" onClick={this.props.sortByAge}>
						<i className={this.props.orderAgeAsc ? 'fa fa-sort-numeric-asc' : 'fa fa-sort-numeric-desc'}></i>Sort by age
					</button>
				</div>
			</div>
		);
		
	}
}