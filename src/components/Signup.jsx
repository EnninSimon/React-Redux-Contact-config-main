import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { signUp } from '../actions/authAction';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
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
        this.props.signUp(this.state);
        this.setState({
            username: "",
            email: "",
            password: "",
        })
    }

    render() {
        return (
            <div style={{ width: "40%", margin: "auto", marginTop: "60px" }}>
                <h1>Signup here</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username"
                            name="username" onChange={this.handleChange}
                            value={this.state.username} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" placeholder="Email"
                            name="email" onChange={this.handleChange}
                            value={this.state.email} />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            name="password" onChange={this.handleChange}
                            value={this.state.password} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Signup
                </Button>
                </Form>
            </div>
        );
    }
}

const mapDispatchToProps =  {
    signUp: signUp
}

export default connect(null, mapDispatchToProps)(Signup);
