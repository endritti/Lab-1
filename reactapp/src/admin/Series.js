import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
/*import {AddDepModal} from './AddDepModal';
import {EditDepModal} from './EditDepModal';*/

export class Series extends Component{

    constructor(props){
        super(props);
        this.state={seri:[]}
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

    
    render(){
        const {seri}=this.state;
        
        return(
            <div >
                <Table className="mt-4 text-center" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Series ID</th>
                            <th>Series Name</th>
                            <th>Series Description</th>
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
                            <tr key={ser.serieId}>
                                <td>{ser.serieId}</td>
                                <td>{ser.name}</td>
                                <td>{ser.description}</td>
                                <td>{ser.cinema}</td>
                                <td>{ser.genre}</td>
                                <td>{ser.mainActor}</td>
                                <td>{ser.producer}</td>
                                <td>{ser.status}</td>
                                <td>Edit/Delete</td>

                            </tr>)}
                    </tbody>

                </Table>

                
            </div>
        )
    }
}