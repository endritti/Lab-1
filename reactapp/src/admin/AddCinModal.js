import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class AddCinModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(process.env.REACT_APP_API + "Cinema", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cinemaName: event.target.cinemaName.value,
        cinemaCapacity: event.target.cinemaCapacity.value,
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
              Add Cinema
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="cinemaName">
                    <Form.Label>Cinema Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="CinemaName"
                      required
                      placeholder="Cinema Name"
                    />
                  </Form.Group>
                  <Form.Group controlId="cinemaCapacity">
                    <Form.Label>Cinema Capacity</Form.Label>
                    <Form.Control
                      type="text"
                      name="CinemaCapacity"
                      required
                      placeholder="Cinema Capacity"
                    />
                  </Form.Group>
                  <Form.Group>
                    <br />
                    <Button variant="primary" type="submit">
                      Add Cinema
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
