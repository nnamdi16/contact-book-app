import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ListContacts from '../src/ListContacts';
import { Route } from 'react-router-dom';
import CreateContact from './CreateContact';
// import Avatar1 from './img/avatar-1606916_640.png';
// import Avatar2 from './img/avatar-1789663_640.png';
// import Avatar3 from './img/avatar-2027366_640.png';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
	state = {
		contacts: []

		// contacts: [
		// 	{
		// 		id: 'ryan',
		// 		name: 'Ryan Florence',
		// 		email: 'ryan@reacttraining.com',
		// 		avatarURL: Avatar1
		// 	},

		// 	{
		// 		id: 'michael',
		// 		name: 'Michael Jackson',
		// 		email: 'michael@reacttraining.com',
		// 		avatarURL: Avatar2
		// 	},

		// 	{
		// 		id: 'tyler',
		// 		name: 'Tyler McGinnis',
		// 		email: 'tyler@reacttraining.com',
		// 		avatarURL: `${Avatar3}`
		// 	}
		// ]
	};
	componentDidMount() {
		ContactsAPI.getAll().then(contacts => {
			this.setState({ contacts });
		});
	}
	removeContact = contact => {
		this.setState(state => ({
			contacts: state.contacts.filter(c => c.id !== contact.id)
		}));
		ContactsAPI.remove(contact);
	};
	createContact(contact) {
		ContactsAPI.create(contact).then(contact => {
			this.setState(state => ({
				// contacts: [...state.contacts, ...[contact]]
				contacts: state.contacts.concat([contact])
			}));
		});
	}

	render() {
		return (
			<div>
				<Route
					exact
					path="/"
					render={() => <ListContacts contacts={this.state.contacts} onDeleteContact={this.removeContact} />}
				/>
				<Route
					exact
					path="/create"
					render={({ history }) => (
						<CreateContact
							onCreateContact={contact => {
								this.createContact(contact);
								history.push('/');
							}}
						/>
					)}
				/>
			</div>
		);
	}
}

export default App;
