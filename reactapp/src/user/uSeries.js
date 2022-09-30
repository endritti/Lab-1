import React,{Component} from 'react';
import { Table } from "react-bootstrap";
import {Modal,Button,Image,ButtonToolbar} from 'react-bootstrap';
import "./content.css";
import Container from 'react'
import { AddCartModal } from "./AddCartModal";

export class uSeries extends Component{
    constructor(props) {
        super(props);
        this.state = { seri: [],addModalShow:false};
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
      const { seri,pId,quan,uId} = this.state;
      let addModalClose = () => this.setState({ addModalShow: false });

      return(
            <div className="container">
                <Table className="mt-4 table" striped bordered hover size="sm">
          
          <tbody>
            {seri.map((ser) => (
              <tr id="tr" key={ser.moviesId}>
                <td id="td">
                <Image width="300px" height="450px" className="img"
                     src={process.env.REACT_APP_PHOTOPATH+ser.photoFileName}/>
                    <div class="txt">
                    <p id="name" className="p movieName"><span>Serie Name:</span>{ser.name}</p>
                    <p id="id" className="p"><span>Serie ID:</span>{ser.serieId} </p>
                    
                    <p id="desc" className="p"><span>Serie Description:</span>{ser.description}</p>
                    <p id="genre" className="p"><span>Serie Genre:</span>{ser.genre}</p>
                    <p id="acto" className="p"><span>Serie Main Actor:</span>{ser.mainActor}</p>
                    <p id="prod" className="p"><span>Serie Producer:</span>{ser.producer}</p>
                    <p id="status" className="p"><span>Movie Status:</span><p id="statusData">{ser.status}</p></p>
                    <p id="cin" className="p"><span>Cinema:</span>{ser.cinema}</p>
                    </div>
                    
                    <ButtonToolbar>
                    <Button variant='primary' id="btn"
                    onClick={()=>this.setState({addModalShow:true,pId:ser.name,uId:1,quan:1})}>
                    Add to Cart</Button>

                    <AddCartModal show={this.state.addModalShow}
                    onHide={addModalClose} pId = {pId} uId={uId} quan={quan}/>
                </ButtonToolbar>       
                </td>
               
                </tr>
            ))}
          </tbody>
        </Table>
            </div>
            
        )
    }
}