import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class EditActModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(process.env.REACT_APP_API + "Actors", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        actorId: event.target.actorId.value,
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
              Edit Actor
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="actorId">
                    <Form.Label>Actor ID</Form.Label>
                    <Form.Control
                      type="text"
                      name="actorId"
                      required
                      disabled
                      defaultValue={this.props.actid}
                    />
                  </Form.Group>

                  <Form.Group controlId="actorName">
                    <Form.Label>Actor Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="actorName"
                      required
                      defaultValue={this.props.actname}
                    />
                  </Form.Group>
                  <Form.Group controlId="actorAge">
                    <Form.Label>Actor Age</Form.Label>
                    <Form.Control
                      type="text"
                      name="actorAge"
                      required
                      defaultValue={this.props.actage}
                    />
                  </Form.Group>
                  <Form.Group controlId="moviesPlayed">
                    <Form.Label>Nr. of Movies Played</Form.Label>
                    <Form.Control
                      type="text"
                      name="moviesPlayed"
                      required
                      defaultValue={this.props.actnr}
                    />
                  </Form.Group>
                  <Form.Group controlId="actorAdress">
                    <Form.Label>Actor Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="actorAdress"
                      required
                      defaultValue={this.props.actaddress}
                    />
                  </Form.Group>
                  <Form.Group>
                    <br />
                    <Button variant="primary" type="submit">
                      Edit Genre
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
