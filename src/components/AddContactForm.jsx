import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class AddContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            address:"",
            phone_number:"",
            type: ""
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
        this.props.addUser(this.state)
        this.setState({
            name: "",
            email: "",
            address:"",
            phone_number:"",
            type: ""
        })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your name"
                        name="name" onChange={this.handleChange}
                        value={this.state.name} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Your email"
                        name="email" onChange={this.handleChange}
                        value={this.state.email} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Your address"
                        name="address" onChange={this.handleChange}
                        value={this.state.address} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="number" placeholder="Your number"
                        name="phone_number" onChange={this.handleChange}
                        value={this.state.phone_number} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Type</Form.Label>
                    <Form.Control type="text" placeholder="Relationship"
                        name="type" onChange={this.handleChange}
                        value={this.state.type} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        );
    }
}

export default AddContactForm;
