import React, { Component } from 'react';
import UserItem from './components/UserItem';
import UserData from './components/UserData';
import SearchBar from './components/SearchBar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      allUsers: [],
      user: [],
      searchQuery: ''
    };
  }

  componentDidMount() {
    fetch('data.json')
      .then((response) => response.json())
      .then((data) => this.setState({userData: data, allUsers: data, user: data[0]}))
      .catch((err) => console.error(err.toString()));
  }

  setUser(item) {
    this.setState({user: item});
    console.log(item) // set current user
  }

  searchBarChange(e) {
    var str = e.target.value;
    this.setState({searchQuery: str});
    
  }

  render() {
    var filtered = this.state.userData.filter(el => el.name.toLowerCase().indexOf(this.state.searchQuery) !== -1);
    return (
      <div className="container app">
        <SearchBar inputSearch={e => this.searchBarChange(e)} />
        <UserData userData={filtered} user={this.state.user} 
        onItemClick={user => this.setUser(user)} />
      </div>
    );
  }
}
