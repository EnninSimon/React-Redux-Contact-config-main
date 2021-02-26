import React from 'react';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import Contact from './Contact';

const Contacts = (props) => {
    let displayInfo;
    if (props.requesting.user) {
        displayInfo = <p>Loading...</p>
    } else if (props.requested.user && props.users.length < 0) {
        displayInfo = <p>No users found</p>
    } else if (props.requested.user && props.users.length > 0) {
        displayInfo = props.users.map((user) => {
            return <Contact userInfo={user}
                id={user.id} key={user.id}
                deleteContact={props.deleteContact}
                editUser={props.editUser} />
        })
    }
    return (
        <Container>
            <Row>
                { displayInfo }
            </Row>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    usersData: state.usersState.users,
    users: state.firestore.ordered.user,
    requesting: state.firestore.status.requesting,
    requested: state.firestore.status.requested
})

export default compose(
    connect(mapStateToProps),
    firestoreConnect(["user"])
)(Contacts);
