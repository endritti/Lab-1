import React,{Component} from 'react';
import { Table } from "react-bootstrap";
import {Modal,Button,Image,ButtonToolbar} from 'react-bootstrap';
import "./content.css";
import { AddCartModal } from "./AddCartModal";

export class uMovies extends Component{
    constructor(props) {
        super(props);
        this.state = { movi: [], addModalShow:false};
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
        const { movi,pId,quan,uId} = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });

        return(
            <div className="container">
                <Table className="mt-4 table" striped bordered hover size="sm">
          
          <tbody>
            {movi.map((mov) => (
              <tr id="tr" key={mov.moviesId}>
                <td id="td">
                <Image width="300px" height="450px" className="img"
                     src={process.env.REACT_APP_PHOTOPATH+mov.photoFileName}/>
                    <div class="txt">
                    <p id="name" className="p movieName"><span>Movie Name:</span>{mov.name}</p>
                    <p id="id" className="p"><span>Movie ID:</span>{mov.moviesId} </p>             
                    <p id="desc" className="p"><span>Movie Description:</span>{mov.description}</p>
                    <p id="genre" className="p"><span>Movie Genre:</span>{mov.genre}</p>
                    <p id="acto" className="p"><span>Movie Main Actor:</span>{mov.mainActor}</p>
                    <p id="prod" className="p"><span>Movie Producer:</span>{mov.producer}</p>
                    <p id="status" className="p"><span>Movie Status:</span><p id="statusData">{mov.status}</p></p>
                    <p id="cin" className="p"><span>Cinema:</span>{mov.cinema}</p>
                    </div>
                    <ButtonToolbar>
                    <Button variant='primary' id="btn"
                    onClick={()=>this.setState({addModalShow:true,pId:mov.name,uId:1,quan:1})}>
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