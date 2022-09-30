import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddSerModal} from './AddSerModal';
import {EditSerModal} from './EditSerModal';

export class Series extends Component{

    constructor(props){
        super(props);
        this.state={seri:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Series')
        .then(response=>response.json())
        .then(data=>{
            this.setState({seri:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteSer(serid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Series/'+serid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {seri, serid,sername,serdesc,sercinema,sergenre,seractor,serproducer,serstatus,photofilename}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                <div className="navi container">
                    <center>
                    <ul>
                    <li><a href="/admin/Movies" >Movies</a></li>
                    <li><a href="/admin/Series"  id="active">Series</a></li>
                    <li><a href="/admin/Genre">Genres</a></li>
                    <li><a href="/admin/Actors">Actors</a></li>
                    <li><a href="/admin/Producer">Producer</a></li>
                    <li><a href="/admin/Cinema" >Cinema</a></li>
                    <li><a href="/admin/Useri">Users</a></li>

                    </ul>
                    </center>
                </div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                    <tr class="align-text-top">
                            <th>Serie ID</th>
                            <th>Serie Name</th>
                            <th>Serie Description</th>
                            <th>Cinema</th>
                            <th>Genre</th>
                            <th>Main Actor</th>
                            <th>Producer</th>
                            <th>Status</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {seri.map(ser=>
                            <tr class="align-text-top" key={ser.serieId}>
                                <td>{ser.serieId}</td>
                                <td>{ser.name}</td>
                                <td>{ser.description}</td>
                                <td>{ser.cinema}</td>
                                <td>{ser.genre}</td>
                                <td>{ser.mainActor}</td>
                                <td>{ser.producer}</td>
                                <td>{ser.status}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info" onClick={()=>this.setState({editModalShow:true,
                                            serid:ser.serieId,sername:ser.name,serdesc:ser.description,sercinema:ser.cinema,sergenre:ser.genre,seractor:ser.mainActor,serproducer:ser.producer,
                                            serstatus:ser.status,photofilename:ser.photoFileName})}>
                                             Edit
                                        </Button>

                                        <Button className="mr-2" variant="danger" onClick={()=>this.deleteSer(ser.serieId)}>
                                            Delete
                                        </Button>

                                        <EditSerModal show={this.state.editModalShow} onHide={editModalClose}
                                         serid={serid} sername={sername} serdesc={serdesc} sercinema={sercinema} sergenre={sergenre}
                                         seractor={seractor} serproducer={serproducer} serstatus={serstatus} photofilename={photofilename} />
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>
                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Serie</Button>

                    <AddSerModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}