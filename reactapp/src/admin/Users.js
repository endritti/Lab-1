import React, { Component } from "react";
import { Table } from "react-bootstrap";

import { Button, ButtonToolbar } from "react-bootstrap";
/*import {AddDepModal} from './AddDepModal';
import {EditDepModal} from './EditDepModal';*/

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

  render() {
    const { user } = this.state;

    return (
      <div>
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
            {user.map((use) => (
              <tr key={use.userId}>
                <td>{use.userId}</td>
                <td>{use.userName}</td>
                <td>{use.userEmail}</td>
                <td>{use.userPassword}</td>
                <td>{use.userPhoneNumber}</td>
                <td>Edit/Delete</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
