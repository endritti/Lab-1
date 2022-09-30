import React, { Component } from "react";
import { Table } from "react-bootstrap";

import { Button, ButtonToolbar } from "react-bootstrap";
import { EditCartModal } from "./EditCartModal";
import { FaCommentDollar } from "react-icons/fa";

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { cart: [], editModalShow: false };
  }

  refreshList() {
    fetch(process.env.REACT_APP_API + "Cart")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ cart: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }

  deleteCart(cartId) {
    if (window.confirm("Are you sure?")) {
      fetch(process.env.REACT_APP_API + "Cart/" + cartId, {
        method: "DELETE",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
  }
  render() {
    const { cart, cId, pId, quan } = this.state;
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <div className="container">
        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Cart Id</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((ca) => (
              <tr key={ca.cartId}>
                <td>{ca.cartId}</td>
                <td>{ca.productName}</td>
                <td>{ca.quantity}</td>
                <td className="m-auto">
                  <ButtonToolbar>
                    <Button
                      className="m-2"
                      variant="info"
                      onClick={() =>
                        this.setState({
                          editModalShow: true,
                          cId: ca.cartId,
                          pId: ca.productName,
                          quan: ca.quantity,
                        })
                      }
                    >
                      Edit
                    </Button>

                    <Button
                      className="m-2 "
                      variant="danger"
                      onClick={() => this.deleteCart(ca.cartId)}
                    >
                      Delete
                    </Button>
                    <EditCartModal
                      show={this.state.editModalShow}
                      onHide={editModalClose}
                      cId={cId}
                      pId={pId}
                      quan={quan}
                    />
                    
                  </ButtonToolbar>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button className="pull-right">
          Payment Checkot  <FaCommentDollar/>
        </Button>
      </div>
    );
  }
}
