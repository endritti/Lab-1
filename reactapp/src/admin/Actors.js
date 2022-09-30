import React, { Component } from "react";
import { Table } from "react-bootstrap";

import { Button, ButtonToolbar } from "react-bootstrap";
import { AddActModal } from "./AddActModal";
import { EditActModal } from "./EditActModal";

export class Actors extends Component {
  constructor(props) {
    super(props);
    this.state = { acto: [], addModalShow: false, editModalShow: false };
  }

  refreshList() {
    fetch(process.env.REACT_APP_API + "Actors")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ acto: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }

  deleteAct(id) {
    if (window.confirm("Are you sure?")) {
      fetch(process.env.REACT_APP_API + "Actors/" + id, {
        method: "DELETE",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
  }
  render() {
    const { acto, actid, actname, actage,actnr,actaddress } = this.state;
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
                    <li><a href="/admin/Actors" id="active">Actors</a></li>
                    <li><a href="/admin/Producer">Producer</a></li>
                    <li><a href="/admin/Cinema">Cinema</a></li>
                    <li><a href="/admin/Useri">Users</a></li>

                    </ul>
                    </center>
                </div>
        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Actor Id</th>
              <th>Actor Name</th>
              <th>Actor Age</th>
              <th>Nr. of Movies Played</th>
              <th>Actor Adress</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {acto.map((act) => (
              <tr key={act.actorId}>
                <td>{act.actorId}</td>
                <td>{act.actorName}</td>
                <td>{act.actorAge}</td>
                <td>{act.moviesPlayed}</td>
                <td>{act.actorAdress}</td>
                <td className="m-auto">
                  <ButtonToolbar>
                    <Button
                      className="m-2"
                      variant="info"
                      onClick={() =>
                        this.setState({
                          editModalShow: true,
                          actid: act.actorId,
                          actname: act.actorName,
                          actage: act.actorAge,
                          actnr: act.moviesPlayed,
                          actaddress: act.actorAdress,
                        })
                      }
                    >
                      Edit
                    </Button>

                    <Button
                      className="m-2 "
                      variant="danger"
                      onClick={() => this.deleteAct(act.actorId)}
                    >
                      Delete
                    </Button>

                    <EditActModal
                      show={this.state.editModalShow}
                      onHide={editModalClose}
                      actid={actid}
                      actname={actname}
                      actage={actage}
                      actnr={actnr}
                      actaddress={actaddress}
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
            Add Actor
          </Button>

          <AddActModal show={this.state.addModalShow} onHide={addModalClose} />
        </ButtonToolbar>
      </div>
    );
  }
}
