import React, { Component } from "react";
import { Table } from "react-bootstrap";

import { Button, ButtonToolbar } from "react-bootstrap";
/*import {AddDepModal} from './AddDepModal';
import {EditDepModal} from './EditDepModal';*/

export class Cinema extends Component {
  constructor(props) {
    super(props);
    this.state = { cinem: [] };
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

  render() {
    const { cinem } = this.state;

    return (
      <div>
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
                <td>Edit/Delete</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
