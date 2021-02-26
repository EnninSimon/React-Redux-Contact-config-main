import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import {editContact} from '../store/contactsActions';


class EditContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.userInfo.name,
            email: props.userInfo.email,
            address: props.userInfo.address,
            phone_number: props.userInfo.phone_number,
            type: props.userInfo.type,
            id: props.userInfo.id,
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editContact(this.state.id, this.state)
        this.setState({
            name: "",
            email: "",
            address:"",
            phone_number:"",
            type: ""
        })
        this.props.closeModal();
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Re-enter name"
                        name="name" onChange={this.handleChange}
                        value={this.state.name} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Re-enter email"
                        name="email" onChange={this.handleChange}
                        value={this.state.email} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Re-enter address"
                        name="address" onChange={this.handleChange}
                        value={this.state.address} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="number" placeholder="Re-enter number"
                        name="phone_number" onChange={this.handleChange}
                        value={this.state.phone_number} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Type</Form.Label>
                    <Form.Control type="text" placeholder="Re-enter relationship"
                        name="type" onChange={this.handleChange}
                        value={this.state.type} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

const mapDispatchToProps = {
    editContact: editContact
}


export default connect(null, mapDispatchToProps)(EditContactForm);
