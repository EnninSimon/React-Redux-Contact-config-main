import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Contacts from './components/Contacts';
import AddContactForm from './components/AddContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addContact, deleteContact } from './store/contactsActions';
import {logout} from './actions/authAction';
import './App.css';

class App extends Component {

	addNewUser = (user) => {
		this.props.addContact(user)
	}

	deleteContact = (id) => {
		this.props.deleteContact(id)
	}

	editUser = (id, updatedUser) => {
		this.setState({
			users: this.state.users.map(user => user.id === id ? updatedUser : user)
		})
	}

	render() {
		return (
			<>
				<Container fluid style={{ marginTop: "2rem" }}>
					<Row>
						<Col md="4">
							<h4 className="text-center">Add New Contact</h4>
							<AddContactForm addUser={this.addNewUser} />
						</Col>
						<Col>
							<h4 className="text-center" style={{ paddingBottom: "15px" }}>All Contacts</h4>
							<Button onClick={()=> this.props.logout()} style={{marginBottom:"1rem"}}>Logout</Button>
							<Contacts usersData={this.props.users}
								deleteContact={this.deleteContact}
								editUser={this.editUser} />
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	users: state.users
})

const mapDispatchToProps = {
	addContact: addContact,
	deleteContact: deleteContact,
	logout: logout
}

export default connect(mapStateToProps, mapDispatchToProps)(App);