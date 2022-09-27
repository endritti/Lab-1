import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class EditUsrModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(process.env.REACT_APP_API + "Users", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: event.target.userId.value,
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
              Edit Users
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="userId">
                    <Form.Label>genreId</Form.Label>
                    <Form.Control
                      type="text"
                      name="userId"
                      required
                      disabled
                      defaultValue={this.props.usrid}
                    />
                  </Form.Group>

                  <Form.Group controlId="userName">
                    <Form.Label>genreName</Form.Label>
                    <Form.Control
                      type="text"
                      name="userName"
                      required
                      defaultValue={this.props.usrname}
                      placeholder="Emri"
                    />
                  </Form.Group>

                  <Form.Group controlId="userEmail">
                    <Form.Label>userEmail</Form.Label>
                    <Form.Control
                      type="text"
                      name="userEmail"
                      required
                      defaultValue={this.props.usrem}
                      placeholder="Adresa"
                    />
                  </Form.Group>

                  <Form.Group controlId="userPassword">
                    <Form.Label>userPassword</Form.Label>
                    <Form.Control
                      type="text"
                      name="userPassword"
                      required
                      defaultValue={this.props.usrpw}
                      placeholder="Fjalekalimi"
                    />
                  </Form.Group>
                  <Form.Group controlId="userPhoneNumber">
                    <Form.Label>userPhoneNumber</Form.Label>
                    <Form.Control
                      type="text"
                      name="userPhoneNumber"
                      required
                      defaultValue={this.props.usrpn}
                      placeholder="Celulari"
                    />
                  </Form.Group>

                  <Form.Group>
                    <br />
                    <Button variant="primary" type="submit">
                      Edit Users
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
