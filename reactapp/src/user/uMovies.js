import React,{Component} from 'react';
import { Table } from "react-bootstrap";
import {Modal,Button,Image} from 'react-bootstrap';
import "./content.css";
import Container from 'react'
export class uMovies extends Component{
    constructor(props) {
        super(props);
        this.state = { movi: []};
      }
    
      refreshList() {
        fetch(process.env.REACT_APP_API + "Movies")
          .then((response) => response.json())
          .then((data) => {
            this.setState({ movi: data });
          });
      }
    
      componentDidMount() {
        this.refreshList();
      }
    
      componentDidUpdate() {
        this.refreshList();
      }
    render(){
        const { movi} = this.state;
        return(
            <div className="container">
                <Table className="mt-4 table" striped bordered hover size="sm">
          
          <tbody>
            {movi.map((mov) => (
              <tr id="tr" key={mov.moviesId}>
                <td id="td">
                <Image width="300px" height="450px" 
                     src={process.env.REACT_APP_PHOTOPATH+mov.photoFileName}/>
                    <div class="txt">
                    <p id="name"><span>Movie Name:</span>{mov.name}</p>
                    <p id="id"><span>Movie ID:</span>{mov.moviesId} </p>
                    
                    <p id="desc"><span>Movie Description:</span>{mov.description}</p>
                    <p id="genre"><span>Movie Genre:</span>{mov.genre}</p>
                    <p id="acto"><span>Movie Main Actor:</span>{mov.mainActor}</p>
                    <p id="prod"><span>Movie Producer:</span>{mov.producer}</p>
                    <p id="status"><span>Movie Status:</span>{mov.status}</p>
                    <p id="cin"><span>Cinema:</span>{mov.cinema}</p>
                    </div>
                    
                    <Button id="btn">
                        Add to Cart
                    </Button>          
                </td>
               
                </tr>
            ))}
          </tbody>
        </Table>
            </div>
            
        )
    }
}