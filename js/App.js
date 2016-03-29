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
    if (str.length > 0) {
      var filteredData = this.state.userData.filter((el) => {
      var searchValue = el.name.toLowerCase();
        return searchValue.indexOf(str) !== -1;
      });
      console.log(filteredData);
      this.setState({userData:filteredData, searchQuery: str});
    } else {
      this.setState({userData: this.state.allUsers});
    }
    
  }

  render() {
    
    return (
      <div className="container app">
        <SearchBar inputSearch={e => this.searchBarChange(e)} />
        <UserData userData={this.state.userData} user={this.state.user} 
        onItemClick={user => this.setUser(user)} />
      </div>
    );
  }
}
