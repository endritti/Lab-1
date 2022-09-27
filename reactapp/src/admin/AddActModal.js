import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class AddActModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(process.env.REACT_APP_API + "Actors", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        actorName: event.target.actorName.value,
        actorAge: event.target.actorAge.value,
        moviesPlayed: event.target.moviesPlayed.value,
        actorAdress: event.target.actorAdress.value,
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
              Add Actor
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  
                  <Form.Group controlId="actorName">
                    <Form.Label>Actor Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="actorName"
                      required
                      placeholder="Actor Name"
                    />
                  </Form.Group>
                  <Form.Group controlId="actorAge">
                    <Form.Label>Actor Age</Form.Label>
                    <Form.Control
                      type="text"
                      name="actorAge"
                      required
                      placeholder="Actor Age"
                    />
                  </Form.Group>
                  <Form.Group controlId="moviesPlayed">
                    <Form.Label>Nr. of Movies Played</Form.Label>
                    <Form.Control
                      type="text"
                      name="moviesPlayed"
                      required
                      placeholder="Nr. of Movies Played"
                    />
                  </Form.Group>
                  <Form.Group controlId="actorAdress">
                    <Form.Label>Actor Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="actorAdress"
                      required
                      placeholder="Actor last known Address"
                    />
                  </Form.Group>
                  <Form.Group>
                    <br />
                    <Button variant="primary" type="submit">
                      Add Actor
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
