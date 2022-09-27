import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class EditSerModal extends Component{
    constructor(props){
        super(props);
        this.state={genr:[],cine:[],acto:[],prod:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleFileSelected=this.handleFileSelected.bind(this);
    }

    
    photofilename = "anonymous.png";
    imagesrc = process.env.REACT_APP_PHOTOPATH+this.photofilename;

 
    componentDidMount(){
        fetch(process.env.REACT_APP_API+'Genre')
        .then(response=>response.json())
        .then(data=>{
            this.setState({genr:data});
        });
        fetch(process.env.REACT_APP_API+'Cinema')
        .then(response=>response.json())
        .then(data=>{
            this.setState({cine:data});
        });
        fetch(process.env.REACT_APP_API+'Actors')
        .then(response=>response.json())
        .then(data=>{
            this.setState({acto:data});
        });
        fetch(process.env.REACT_APP_API+'Producer')
        .then(response=>response.json())
        .then(data=>{
            this.setState({prod:data});
        });
    }
   

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'Series',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({  
                serieId:event.target.serieId.value,             
                name:event.target.name.value,
                description:event.target.description.value,
                cinema:event.target.cinema.value,
                genre:event.target.genre.value,
                mainActor:event.target.mainActor.value,
                producer:event.target.producer.value,
                status:event.target.status.value,
                photoFileName:this.photofilename

            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed'  );
        })
    }


    handleFileSelected(event){
        event.preventDefault();
        this.photofilename=event.target.files[0].name;
        alert(this.photofilename);
        const formData = new FormData();
        formData.append(
            "myFile",
            event.target.files[0],
            event.target.files[0].name
        );

        fetch(process.env.REACT_APP_API+'Series/SaveFile',{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then((result)=>{
            this.imagesrc=process.env.REACT_APP_PHOTOPATH+result;
        },
        (error)=>{
            alert('Failed');
        })
        
    }

    render(){
        return (
            <div className="container">
                <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header clooseButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit Serie
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="moviesId">
                                    <Form.Label>Serie ID</Form.Label>
                                    <Form.Control defaultValue={this.props.serid} type="text" name="serieId" required />
                                </Form.Group>
                                <Form.Group controlId="name">
                                    <Form.Label>Serie Name</Form.Label>
                                    <Form.Control defaultValue={this.props.sername} type="text" name="name" required />
                                </Form.Group>
                                <Form.Group controlId="description">
                                    <Form.Label>Serie Description</Form.Label>
                                    <Form.Control type="text" name="description" required  defaultValue={this.props.serdesc}/>
                                </Form.Group>
                                <Form.Group controlId="cinema">
                                    <Form.Label>Cinema</Form.Label>
                                    <Form.Control as="select" defaultValue={this.props.sercinema} >
                                    {this.state.cine.map(cin=>
                                    <option key={cin.cinemaId}>{cin.cinemaName}</option>)}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="genre">
                                    <Form.Label>Genre</Form.Label>
                                    <Form.Control as="select" defaultValue={this.props.sergenre}>
                                    {this.state.genr.map(gen=>
                                    <option key={gen.genreId}>{gen.genreName}</option>)}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="mainActor">
                                    <Form.Label>Main Actor</Form.Label>
                                    <Form.Control as="select" defaultValue={this.props.seractor}>
                                    {this.state.acto.map(act=>
                                    <option key={act.actorId}>{act.actorName}</option>)}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="producer">
                                    <Form.Label>Producer</Form.Label>
                                    <Form.Control as="select" defaultValue={this.props.serproducer}>
                                    {this.state.prod.map(pro=>
                                    <option key={pro.producerId}>{pro.producerName}</option>)}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="status" >
                                    <Form.Label>Serie Status</Form.Label>
                                    <Form.Control type="text" name="status" required defaultValue={this.props.serstatus} />
                                </Form.Group>
                                <Form.Group>
                                    <br/>
                                    <Button variant="primary" type="submit">
                                        Edit Serie
                                    </Button>
                                </Form.Group>
                                </Form>
                            </Col>
                            <Col sm={6}>
                                <Image width="200px" height="200px" 
                                src={process.env.REACT_APP_PHOTOPATH+this.props.photofilename}/>
                                <input onChange={this.handleFileSelected} type="File"/>
                            </Col>
                        </Row>
                    </Modal.Body>  
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

}