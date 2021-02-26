import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authAction';
import { Form, Button } from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
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
        this.props.login(this.state.email, this.state.password);
        this.setState({
            email: "",
            password: ""
        })
    }

    render() {
        if (this.props.auth.isLoaded && !this.props.auth.isEmpty){
          return  <Redirect to="/"/>
        }
        return (
            <div style={{ width: "40%", margin: "auto", marginTop: "60px" }}>
                <h1>Login here</h1>
                <Form onSubmit={this.handleSubmit}>
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
                        Login
                    </Button>
                </Form>
            </div>
        );
    }
}

const mapDispatchToProps = {
    login: loginUser
}

const mapStateToProps = (state) => ({
    auth: state.firebase.auth
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
