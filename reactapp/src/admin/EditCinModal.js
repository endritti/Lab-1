import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class EditCinModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(process.env.REACT_APP_API + "Cinema", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cinemaId: event.target.cinemaId.value,
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
              Edit Cinema
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="cinemaId">
                    <Form.Label>cinemaId</Form.Label>
                    <Form.Control
                      type="text"
                      name="cinemaId"
                      required
                      disabled
                      defaultValue={this.props.cinid}
                    />
                  </Form.Group>

                  <Form.Group controlId="cinemaName">
                    <Form.Label>cinemaName</Form.Label>
                    <Form.Control
                      type="text"
                      name="cinemaName"
                      required
                      defaultValue={this.props.cinname}
                      placeholder="Emri"
                    />
                  </Form.Group>

                  <Form.Group controlId="cinemaCapacity">
                    <Form.Label>cinemaCapacity</Form.Label>
                    <Form.Control
                      type="text"
                      name="cinemaCapacity"
                      required
                      defaultValue={this.props.cincap}
                      placeholder="Kapaciteti"
                    />
                  </Form.Group>

                  <Form.Group>
                    <br />
                    <Button variant="primary" type="submit">
                      Edit Cinema
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
