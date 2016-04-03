import React, { Component } from 'react';
import UserItem from './components/UserItem';
import UserData from './components/UserData';
import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      allUsers: [],
      user: [],
      searchQuery: '',
      sortNameAsc: true,
      sortAgeAsc: true
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

  sortByName() {
    let userData = this.state.userData;
    let sort = this.state.sortNameAsc;

    if (sort) {
      userData.sort((el, nextEl) => {
        if (el.name > nextEl.name) {
          return 1;
        } else if (el.name < nextEl.name) {
          return -1;
        } else {
          return 0;
        }
      });
    } else {
      userData.sort((el, nextEl) => {
        if (el.name < nextEl.name) {
          return 1;
        } else if (el.name > nextEl.name) {
          return -1;
        } else {
          return 0;
        }
      });
    }
    this.setState({
      userData: userData,
      sortNameAsc: !sort, 
      user: userData[0]
    });
  }

  sortByAge() {
    let userData = this.state.userData;
    let sort = this.state.sortAgeAsc;

    if (sort) {
      userData.sort((el, nextEl) => {
        if (el.age > nextEl.age) {
          return 1;
        } else if (el.age < nextEl.age) {
          return -1;
        } else {
          return 0;
        }
      });
    } else {
      userData.sort((el, nextEl) => {
        if (el.age < nextEl.age) {
          return 1;
        } else if (el.age > nextEl.age) {
          return -1;
        } else {
          return 0;
        }
      });
    }
    this.setState({
      userData: userData,
      sortAgeAsc: !sort, 
      user: userData[0]
    });
  }

  render() {
    var filtered = this.state.userData.filter(el => el.name.toLowerCase().indexOf(this.state.searchQuery) !== -1);
    // filtered.sort((elem, nextElem) => elem.age > nextElem.age);
    return (
      <div className="container app">
        <SearchBar inputSearch={e => this.searchBarChange(e)} />
        <ToolBar
          orderAgeAsc={this.state.sortAgeAsc}
          orderNameAsc={this.state.sortNameAsc}
          sortByAge={() => this.sortByAge()} 
          sortByName={() => this.sortByName()}
          />
        <UserData userData={filtered} user={this.state.user} 
        onItemClick={user => this.setUser(user)} />
      </div>
    );
  }
}
