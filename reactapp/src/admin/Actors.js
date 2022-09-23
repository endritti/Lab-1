import React, { Component } from "react";
import { Table } from "react-bootstrap";

import { Button, ButtonToolbar } from "react-bootstrap";
/*import {AddDepModal} from './AddDepModal';
import {EditDepModal} from './EditDepModal';*/

export class Actors extends Component {
  constructor(props) {
    super(props);
    this.state = { genr: [] };
  }

  refreshList() {
    fetch(process.env.REACT_APP_API + "Actors")
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
              <th>Actor ID</th>
              <th>Actor Name</th>
              <th>Actor Age</th>
              <th>Movies Played</th>
              <th>Actors Adress</th>
            </tr>
          </thead>
          <tbody>
            {genr.map((gen) => (
              <tr key={gen.actorId}>
                <td>{gen.actorId}</td>
                <td>{gen.actorName}</td>
                <td>{gen.actorAge}</td>
                <td>{gen.moviesPlayed}</td>
                <td>{gen.actorAdress}</td>
                <td>Edit/Delete</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
