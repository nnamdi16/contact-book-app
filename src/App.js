import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ListContacts from '../src/ListContacts';
import Avatar1 from './img/avatar-1606916_640.png';
import Avatar2 from './img/avatar-1789663_640.png';
import Avatar3 from './img/avatar-2027366_640.png';

class App extends Component {
	state = {
		contacts: [
			{
				id: 'ryan',
				name: 'Ryan Florence',
				email: 'ryan@reacttraining.com',
				avatarURL: Avatar1
			},

			{
				id: 'michael',
				name: 'Michael Jackson',
				email: 'michael@reacttraining.com',
				avatarURL: Avatar2
			},

			{
				id: 'tyler',
				name: 'Tyler McGinnis',
				email: 'tyler@reacttraining.com',
				avatarURL: `${Avatar3}`
			}
		]
	};
	removeContact = contact => {
		this.setState(state => ({
			contacts: state.contacts.filter(c => c.id !== contact.id)
		}));
	};

	render() {
		return (
			<div>
				<ListContacts contacts={this.state.contacts} onDeleteContact={this.removeContact} />
			</div>
		);
	}
}

export default App;
