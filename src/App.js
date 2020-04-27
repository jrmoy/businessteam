import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
	constructor() {
		super();
		this.state = {
			bussinessTeams: [],
			searchField: ''
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ bussinessTeams: users }));
	}

		handleChange = (e) => {
		this.setState({ searchField: e.target.value });
    };
  
	render() {
		const { bussinessTeams, searchField } = this.state;
		const filteredBussinessTeams = bussinessTeams.filter((businessTeam) =>
			businessTeam.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className = 'App'>
				<h1>Business Team</h1>
          <SearchBox placeholder='search' handleChange={this.handleChange} />
          <CardList businessTeams={filteredBussinessTeams} />	
			</div>
		);
	}
}

export default App;
