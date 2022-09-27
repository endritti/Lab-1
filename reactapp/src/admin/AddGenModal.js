import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class AddGenModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(process.env.REACT_APP_API + "Genre", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        genreName: event.target.genreName.value,
        genreDescription: event.target.genreDescription.value,
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
              Add Genre
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="genreName">
                    <Form.Label>Genre Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="GenreName"
                      required
                      placeholder="Genre Name"
                    />
                  </Form.Group>
                  <Form.Group controlId="genreDescription">
                    <Form.Label>Genre Description</Form.Label>
                    <Form.Control
                      type="text"
                      name="GenreDescription"
                      required
                      placeholder="Genre Description"
                    />
                  </Form.Group>
                  <Form.Group>
                    <br />
                    <Button variant="primary" type="submit">
                      Add Genre
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
