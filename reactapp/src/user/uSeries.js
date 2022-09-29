import React,{Component} from 'react';
import { Table } from "react-bootstrap";
import {Modal,Button,Image} from 'react-bootstrap';
import "./content.css";
import Container from 'react'

export class uSeries extends Component{
    constructor(props) {
        super(props);
        this.state = { seri: []};
      }
    
      refreshList() {
        fetch(process.env.REACT_APP_API + "Series")
          .then((response) => response.json())
          .then((data) => {
            this.setState({ seri: data });
          });
      }
    
      componentDidMount() {
        this.refreshList();
      }
    
      componentDidUpdate() {
        this.refreshList();
      }
    render(){
        const { seri} = this.state;
        return(
            <div className="container">
                <Table className="mt-4 table" striped bordered hover size="sm">
          
          <tbody>
            {seri.map((ser) => (
              <tr id="tr" key={ser.moviesId}>
                <td id="td">
                <Image width="300px" height="450px" 
                     src={process.env.REACT_APP_PHOTOPATH+ser.photoFileName}/>
                    <div class="txt">
                    <p id="name"><span>Movie Name:</span>{ser.name}</p>
                    <p id="id"><span>Movie ID:</span>{ser.serieId} </p>
                    
                    <p id="desc"><span>Movie Description:</span>{ser.description}</p>
                    <p id="genre"><span>Movie Genre:</span>{ser.genre}</p>
                    <p id="acto"><span>Movie Main Actor:</span>{ser.mainActor}</p>
                    <p id="prod"><span>Movie Producer:</span>{ser.producer}</p>
                    <p id="status"><span>Movie Status:</span>{ser.status}</p>
                    <p id="cin"><span>Cinema:</span>{ser.cinema}</p>
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