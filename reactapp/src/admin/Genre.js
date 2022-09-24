import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddGenModal} from './AddGenModal';
import {EditGenModal} from './EditGenModal';

export class Genre extends Component{

    constructor(props){
        super(props);
        this.state={genr:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'Genre')
        .then(response=>response.json())
        .then(data=>{
            this.setState({genr:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteGen(genid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'Genre/'+genid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {genr, genid,genname,gendesc}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
          
            <div >
              
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                          <th>Genre Id</th>
                          <th>Genre Name</th>
                          <th>Genre Description</th>                    
                          <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {genr.map(gen=>
                            <tr key={gen.genreId}>
                                <td>{gen.genreId}</td>
                                <td>{gen.genreName}</td>
                                <td>{gen.genreDescription}</td>                             
                                <td className='m-auto'>
                                    <ButtonToolbar>
                                        <Button className="m-2" variant="info" onClick={()=>this.setState({editModalShow:true,
                                            genid:gen.genreId,genname:gen.genreName,gendesc:gen.genreDescription})}>
                                                Edit
                                        </Button>
                                       
                                        <Button className="m-2 " variant="danger"
                                        onClick={()=>this.deleteGen(gen.genreId)}>
                                                Delete
                                        </Button>

                                        <EditGenModal show={this.state.editModalShow}
                                        onHide={editModalClose}
                                        genid={genid}
                                        genname={genname}
                                        gendesc={gendesc}
                                        />
                                      </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Genre</Button>

                    <AddGenModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}