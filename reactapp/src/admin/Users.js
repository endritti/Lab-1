import React, { Component } from "react";
import { Table } from "react-bootstrap";

import { Button, ButtonToolbar } from "react-bootstrap";
/*import {AddDepModal} from './AddDepModal';
import {EditDepModal} from './EditDepModal';*/

export class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { genr: [] };
  }

  refreshList() {
    fetch(process.env.REACT_APP_API + "Users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ genr: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }

  render() {
    const { genr } = this.state;

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
            {genr.map((gen) => (
              <tr key={gen.userId}>
                <td>{gen.userId}</td>
                <td>{gen.userName}</td>
                <td>{gen.userEmail}</td>
                <td>{gen.userPassword}</td>
                <td>{gen.userPhoneNumber}</td>
                <td>Edit/Delete</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
