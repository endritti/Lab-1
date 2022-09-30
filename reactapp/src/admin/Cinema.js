import React, { Component } from "react";
import { Table } from "react-bootstrap";

import { Button, ButtonToolbar } from "react-bootstrap";
import { AddCinModal } from "./AddCinModal";
import { EditCinModal } from "./EditCinModal";

export class Cinema extends Component {
  constructor(props) {
    super(props);
    this.state = { cinem: [], addModalShow: false, editModalShow: false };
  }

  refreshList() {
    fetch(process.env.REACT_APP_API + "Cinema")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ cinem: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }

  deleteCin(cinid) {
    if (window.confirm("Are you sure?")) {
      fetch(process.env.REACT_APP_API + "Cinema/" + cinid, {
        method: "DELETE",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
  }

  render() {
    const { cinem, cinid, cinname, cincap } = this.state;
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
                    <li><a href="/admin/Actors">Actors</a></li>
                    <li><a href="/admin/Producer">Producer</a></li>
                    <li><a href="/admin/Cinema"  id="active">Cinema</a></li>
                    <li><a href="/admin/Useri">Users</a></li>

                    </ul>
                    </center>
                </div>
        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Cinema ID</th>
              <th>Cinema Name</th>
              <th>Cinema Capacity</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {cinem.map((cin) => (
              <tr key={cin.cinemaId}>
                <td>{cin.cinemaId}</td>
                <td>{cin.cinemaName}</td>
                <td>{cin.cinemaCapacity}</td>
                <td className="m-auto">
                  <ButtonToolbar>
                    <Button
                      className="m-2"
                      variant="info"
                      onClick={() =>
                        this.setState({
                          editModalShow: true,
                          cinid: cin.cinemaId,
                          cinname: cin.cinemaName,
                          cincap: cin.cinemaCapacity,
                        })
                      }
                    >
                      Edit
                    </Button>

                    <Button
                      className="m-2 "
                      variant="danger"
                      onClick={() => this.deleteCin(cin.cinemaId)}
                    >
                      Delete
                    </Button>

                    <EditCinModal
                      show={this.state.editModalShow}
                      onHide={editModalClose}
                      cinid={cinid}
                      cinname={cinname}
                      cincap={cincap}
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
            Add Cinema
          </Button>

          <AddCinModal show={this.state.addModalShow} onHide={addModalClose} />
        </ButtonToolbar>
      </div>
    );
  }
}
