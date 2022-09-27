import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class AddUsrModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(process.env.REACT_APP_API + "Users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: event.target.userName.value,
        userEmail: event.target.userEmail.value,
        userPassword: event.target.userPassword.value,
        userPhoneNumber: event.target.userPhoneNumber.value,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
        },
        (error) => {
          alert("Failed");
        }
      );
  }
  render() {
    return (
      <div className="container">
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header clooseButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Users
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="userName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="UserName"
                      required
                      placeholder="User Name"
                    />
                  </Form.Group>
                  <Form.Group controlId="userEmail">
                    <Form.Label>User Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="UserEmail"
                      required
                      placeholder="User Email"
                    />
                  </Form.Group>
                  <Form.Group controlId="userPassword">
                    <Form.Label>User Password</Form.Label>
                    <Form.Control
                      type="text"
                      name="UserPassword"
                      required
                      placeholder="User Password"
                    />
                  </Form.Group>
                  <Form.Group controlId="userPhoneNumber">
                    <Form.Label>User PhoneNumber</Form.Label>
                    <Form.Control
                      type="text"
                      name="UserPhoneNumber"
                      required
                      placeholder="User PhoneNumber"
                    />
                  </Form.Group>
                  <Form.Group>
                    <br />
                    <Button variant="primary" type="submit">
                      Add Users
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
