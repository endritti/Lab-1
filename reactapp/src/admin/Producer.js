import React, { Component } from "react";
import { Table } from "react-bootstrap";

import { Button, ButtonToolbar } from "react-bootstrap";
import { AddProdModal } from "./AddProdModal";
import { EditProdModal } from "./EditProdModal";

export class Producer extends Component {
  constructor(props) {
    super(props);
    this.state = { prod: [] };
  }

  refreshList() {
    fetch(process.env.REACT_APP_API + "Producer")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ prod: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }

  deleteProd(prodid) {
    if (window.confirm("Are you sure?")) {
      fetch(process.env.REACT_APP_API + "Producer/" + prodid, {
        method: "DELETE",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
  }

  render() {
    const { prod, prodid, prodname, prodage, movmade, prodadd } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });

    return (
      <div className="container">
        <div className="navi">
                    <center>
                    <ul>
                    <li><a href="/admin/Movies" >Movies</a></li>
                    <li><a href="/admin/Series">Series</a></li>
                    <li><a href="/admin/Genre">Genres</a></li>
                    <li><a href="/admin/Actors" >Actors</a></li>
                    <li><a href="/admin/Producer" id="active">Producer</a></li>
                    <li><a href="/admin/Cinema">Cinema</a></li>
                    <li><a href="/admin/Useri">Users</a></li>

                    </ul>
                    </center>
                </div>
        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Producer ID</th>
              <th>Producer Name</th>
              <th>Producer Age</th>
              <th>Movies Made</th>
              <th>Producer Adress</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {prod.map((prod) => (
              <tr key={prod.producerId}>
                <td>{prod.producerId}</td>
                <td>{prod.producerName}</td>
                <td>{prod.producerAge}</td>
                <td>{prod.moviesMade}</td>
                <td>{prod.producerAdress}</td>
                <td className="m-auto">
                  <ButtonToolbar>
                    <Button
                      className="m-2"
                      variant="info"
                      onClick={() =>
                        this.setState({
                          editModalShow: true,
                          prodid: prod.producerId,
                          prodname: prod.producerName,
                          prodage: prod.producerAge,
                          movmade: prod.moviesMade,
                          prodadd: prod.producerAdress,
                        })
                      }
                    >
                      Edit
                    </Button>

                    <Button
                      className="m-2 "
                      variant="danger"
                      onClick={() => this.deleteProd(prod.producerId)}
                    >
                      Delete
                    </Button>

                    <EditProdModal
                      show={this.state.editModalShow}
                      onHide={editModalClose}
                      prodid={prodid}
                      prodname={prodname}
                      prodage={prodage}
                      movmade={movmade}
                      prodadd={prodadd}
                    />
                  </ButtonToolbar>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ButtonToolbar>
          <Button
            variant="primary"
            onClick={() => this.setState({ addModalShow: true })}
          >
            Add Producer
          </Button>

          <AddProdModal show={this.state.addModalShow} onHide={addModalClose} />
        </ButtonToolbar>
      </div>
    );
  }
}
