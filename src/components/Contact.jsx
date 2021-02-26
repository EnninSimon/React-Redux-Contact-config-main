import React, { useState } from 'react';
import { Card, Col, Button, Modal } from 'react-bootstrap';
import EditContactForm from './EditContactForm';

const User = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (e) => {
        e.preventDefault();
        props.deleteContact(props.userInfo.id);
    }

    

    return (
        <>
            <Modal animation={false} centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditContactForm userInfo={props.userInfo} 
                    editUser={props.editUser} 
                    closeModal={handleClose}/>
                </Modal.Body>
                
            </Modal>

            <Col md="4" style={{ marginBottom: "1rem" }}>
                <Card>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">
                            Contact
                    </Card.Subtitle>
                        <Card.Title>{props.userInfo.name}</Card.Title>
                        <Card.Text>
                            <p>Email: {props.userInfo.email}</p>
                            <p>Address: {props.userInfo.address}</p>
                            <p>Phone number: {props.userInfo.phone_number}</p>
                            <p>Type: {props.userInfo.type}</p>
                        </Card.Text>
                        <Card.Link href="#" onClick={handleShow}><Button size="sm">Edit</Button></Card.Link>
                        <Card.Link href="#">
                            <Button variant="danger" size="sm" onClick={handleDelete}>Delete</Button>
                        </Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}


export default User;