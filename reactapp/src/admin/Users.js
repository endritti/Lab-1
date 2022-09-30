import React, { Component } from "react";
import { Table } from "react-bootstrap";

import { Button, ButtonToolbar } from "react-bootstrap";
import { AddUsrModal } from "./AddUsrModal";
import { EditUsrModal } from "./EditUsrModal";

export class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { user: [] };
  }

  refreshList() {
    fetch(process.env.REACT_APP_API + "Users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ user: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }

  deleteUsr(usrid) {
    if (window.confirm("Are you sure?")) {
      fetch(process.env.REACT_APP_API + "Users/" + usrid, {
        method: "DELETE",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
  }

  render() {
    const { user, usrid, usrname, usrem, usrpw, usrpn } = this.state;
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
                    <li><a href="/admin/Producer">Producer</a></li>
                    <li><a href="/admin/Cinema">Cinema</a></li>
                    <li><a href="/admin/Useri" id="active">Users</a></li>

                    </ul>
                    </center>
                </div>
        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>User ID</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>User Password</th>
              <th>User PhoneNumber</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {user.map((usr) => (
              <tr key={usr.userId}>
                <td>{usr.userId}</td>
                <td>{usr.userName}</td>
                <td>{usr.userEmail}</td>
                <td>{usr.userPassword}</td>
                <td>{usr.userPhoneNumber}</td>
                <td className="m-auto">
                  <ButtonToolbar>
                    <Button
                      className="m-2"
                      variant="info"
                      onClick={() =>
                        this.setState({
                          editModalShow: true,
                          usrid: usr.userId,
                          usrname: usr.userName,
                          usrem: usr.userEmail,
                          usrpw: usr.userPassword,
                          usrpn: usr.userPhoneNumber,
                        })
                      }
                    >
                      Edit
                    </Button>

                    <Button
                      className="m-2 "
                      variant="danger"
                      onClick={() => this.deleteUsr(usr.userId)}
                    >
                      Delete
                    </Button>

                    <EditUsrModal
                      show={this.state.editModalShow}
                      onHide={editModalClose}
                      usrid={usrid}
                      usrname={usrname}
                      usrem={usrem}
                      usrpw={usrpw}
                      usrpn={usrpn}
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
            Add Users
          </Button>

          <AddUsrModal show={this.state.addModalShow} onHide={addModalClose} />
        </ButtonToolbar>
      </div>
    );
  }
}
