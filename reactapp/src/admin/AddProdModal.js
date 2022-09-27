import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class AddProdModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(process.env.REACT_APP_API + "Producer", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        producerName: event.target.producerName.value,
        producerAge: event.target.producerAge.value,
        moviesMade: event.target.moviesMade.value,
        producerAdress: event.target.producerAdress.value,
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
              Add Producer
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="producerName">
                    <Form.Label>Producer Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="ProducerName"
                      required
                      placeholder="Producer Name"
                    />
                  </Form.Group>
                  <Form.Group controlId="producerAge">
                    <Form.Label>Producer Age</Form.Label>
                    <Form.Control
                      type="text"
                      name="ProducerAge"
                      required
                      placeholder="Producer Age"
                    />
                  </Form.Group>
                  <Form.Group controlId="moviesMade">
                    <Form.Label>Movies Made</Form.Label>
                    <Form.Control
                      type="text"
                      name="MoviesMade"
                      required
                      placeholder="Movies Made"
                    />
                  </Form.Group>
                  <Form.Group controlId="producerAdress">
                    <Form.Label>Producer Adress</Form.Label>
                    <Form.Control
                      type="text"
                      name="ProducerAdress"
                      required
                      placeholder="Producer Adress"
                    />
                  </Form.Group>
                  <Form.Group>
                    <br />
                    <Button variant="primary" type="submit">
                      Add Producer
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
