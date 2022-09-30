import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class AddCartModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(process.env.REACT_APP_API + "Cart", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productName: event.target.productName.value,
        userId:event.target.userId.value,
        quantity: event.target.quantity.value,
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
        <Modal show={true}
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header clooseButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Selected Product to Cart
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="userId">
                    <Form.Label>User ID</Form.Label>
                    <Form.Control
                      type="text"
                      name="userId"
                      required
                      disabled
                      defaultValue={this.props.uId}
                    />
                  </Form.Group>

                  <Form.Group controlId="productName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="productName"
                      required
                      disabled
                      defaultValue={this.props.pId}
                    />
                  </Form.Group>

                  <Form.Group controlId="quantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                      type="number"
                      name="quantity"
                      required
                      defaultValue={this.props.quan}
                      min="1" max="10"
                    />
                  </Form.Group>

                  <Form.Group>
                    <br />
                    <Button variant="primary" type="submit">
                      Add to Cart
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
