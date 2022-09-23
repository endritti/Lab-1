import React, { Component } from "react";
import { Table } from "react-bootstrap";

import { Button, ButtonToolbar } from "react-bootstrap";
/*import {AddDepModal} from './AddDepModal';
import {EditDepModal} from './EditDepModal';*/

export class Producer extends Component {
  constructor(props) {
    super(props);
    this.state = { genr: [] };
  }

  refreshList() {
    fetch(process.env.REACT_APP_API + "Producer")
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
              <th>Producer ID</th>
              <th>Producer Name</th>
              <th>Producer Age</th>
              <th>Movies Made</th>
              <th>Producer Adress</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {genr.map((gen) => (
              <tr key={gen.producerId}>
                <td>{gen.producerId}</td>
                <td>{gen.producerName}</td>
                <td>{gen.producerAge}</td>
                <td>{gen.moviesMade}</td>
                <td>{gen.producerAdress}</td>
                <td>Edit/Delete</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
