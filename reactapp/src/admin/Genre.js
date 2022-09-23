import React, { Component } from "react";
import { Table } from "react-bootstrap";

import { Button, ButtonToolbar } from "react-bootstrap";
/*import {AddDepModal} from './AddDepModal';
import {EditDepModal} from './EditDepModal';*/

export class Genre extends Component {
  constructor(props) {
    super(props);
    this.state = { genr: [] };
  }

  refreshList() {
    fetch(process.env.REACT_APP_API + "Genre")
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
              <th>Genre ID</th>
              <th>Genre Name</th>
              <th>Genre Description</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {genr.map((gen) => (
              <tr key={gen.genreId}>
                <td>{gen.genreId}</td>
                <td>{gen.genreName}</td>
                <td>{gen.genreDescpriton}</td>
                <td>Edit/Delete</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
