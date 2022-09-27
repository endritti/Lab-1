import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class EditProdModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(process.env.REACT_APP_API + "Producer", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        producerId: event.target.producerId.value,
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
              Edit Producer
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="producerId">
                    <Form.Label>producerId</Form.Label>
                    <Form.Control
                      type="text"
                      name="producerId"
                      required
                      disabled
                      defaultValue={this.props.prodid}
                    />
                  </Form.Group>

                  <Form.Group controlId="producerName">
                    <Form.Label>genreName</Form.Label>
                    <Form.Control
                      type="text"
                      name="producerName"
                      required
                      defaultValue={this.props.prodname}
                      placeholder="Emri"
                    />
                  </Form.Group>

                  <Form.Group controlId="producerAge">
                    <Form.Label>producerAge</Form.Label>
                    <Form.Control
                      type="text"
                      name="producerAge"
                      required
                      defaultValue={this.props.prodage}
                      placeholder="Mosha"
                    />
                  </Form.Group>

                  <Form.Group controlId="moviesMade">
                    <Form.Label>moviesMade</Form.Label>
                    <Form.Control
                      type="text"
                      name="moviesMade"
                      required
                      defaultValue={this.props.movmade}
                      placeholder="filmat"
                    />
                  </Form.Group>

                  <Form.Group controlId="producerAdress">
                    <Form.Label>producerAdress</Form.Label>
                    <Form.Control
                      type="text"
                      name="producerAdress"
                      required
                      defaultValue={this.props.prodadd}
                      placeholder="Adresa"
                    />
                  </Form.Group>

                  <Form.Group>
                    <br />
                    <Button variant="primary" type="submit">
                      Edit Producer
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
