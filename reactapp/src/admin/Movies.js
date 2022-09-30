import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import "./nav.css";
import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddMovModal} from './AddMovModal';
import {EditMovModal} from './EditMovModal';

export class Movies extends Component{

    constructor(props){
        super(props);
        this.state={movi:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Movies')
        .then(response=>response.json())
        .then(data=>{
            this.setState({movi:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteMov(movid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Movies/'+movid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {movi, movid,movname,movdesc,movcinema,movgenre,movactor,movproducer,movstatus,photofilename}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            
            <div >
                <div className="navi container">
                    <center>
                    <ul>
                    <li><a href="/admin/Movies" id="active">Movies</a></li>
                    <li><a href="/admin/Series">Series</a></li>
                    <li><a href="/admin/Genre">Genres</a></li>
                    <li><a href="/admin/Actors">Actors</a></li>
                    <li><a href="/admin/Producer">Producer</a></li>
                    <li><a href="/admin/Cinema">Cinema</a></li>
                    <li><a href="/admin/Useri">Users</a></li>

                    </ul>
                    </center>
                </div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                    <tr class="align-text-top">
                            <th>Movie ID</th>
                            <th>Movie Name</th>
                            <th>Movie Description</th>
                            <th>Cinema</th>
                            <th>Genre</th>
                            <th>Main Actor</th>
                            <th>Producer</th>
                            <th>Status</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movi.map(mov=>
                            <tr class="align-text-top" key={mov.moviesId}>
                                <td>{mov.moviesId}</td>
                                <td>{mov.name}</td>
                                <td>{mov.description}</td>
                                <td>{mov.cinema}</td>
                                <td>{mov.genre}</td>
                                <td>{mov.mainActor}</td>
                                <td>{mov.producer}</td>
                                <td>{mov.status}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info" onClick={()=>this.setState({editModalShow:true,
                                            movid:mov.moviesId,movname:mov.name,movdesc:mov.description,movcinema:mov.cinema,movgenre:mov.genre,movactor:mov.mainActor,movproducer:mov.producer,
                                            movstatus:mov.status,photofilename:mov.photoFileName})}>
                                             Edit
                                        </Button>

                                        <Button className="mr-2" variant="danger" onClick={()=>this.deleteMov(mov.moviesId)}>
                                            Delete
                                        </Button>

                                        <EditMovModal show={this.state.editModalShow} onHide={editModalClose}
                                         movid={movid} movname={movname} movdesc={movdesc} movcinema={movcinema} movgenre={movgenre}
                                         movactor={movactor} movproducer={movproducer} movstatus={movstatus} photofilename={photofilename} />
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>
                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Movie</Button>

                    <AddMovModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}