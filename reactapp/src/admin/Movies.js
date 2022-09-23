import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
/*import {AddDepModal} from './AddDepModal';
import {EditDepModal} from './EditDepModal';*/

export class Movies extends Component{

    constructor(props){
        super(props);
        this.state={movi:[]}
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

    
    render(){
        const {movi}=this.state;
        
        return(
            <div >
                <Table className="mt-4 " striped bordered hover size="sm">
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
                                <td>Edit/Delete</td>

                            </tr>)}
                    </tbody>

                </Table>

                
            </div>
        )
    }
}