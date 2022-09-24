import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditGenModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'Genre',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                genreId:event.target.genreId.value,
                genreName:event.target.genreName.value,
                genreDescription:event.target.genreDescription.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }
    render(){
        return (
            <div className="container">
                <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
                    <Modal.Header clooseButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit Genre
                        </Modal.Title>
                    </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="genreId">
                                    <Form.Label>genreId</Form.Label>
                                    <Form.Control type="text" name="genreId" required disabled defaultValue={this.props.genid}/>
                                </Form.Group>

                                <Form.Group controlId="genreName">
                                    <Form.Label>genreName</Form.Label>
                                    <Form.Control type="text" name="genreName" required defaultValue={this.props.genname} placeholder="Emri"/>
                                </Form.Group>

                                <Form.Group controlId="genreDescription">
                                    <Form.Label>genreDescription</Form.Label>
                                    <Form.Control type="text" name="genreDescription" required defaultValue={this.props.gendesc} placeholder="Emri"/>
                                </Form.Group>

                                <Form.Group>
                                    <br/>
                                    <Button variant="primary" type="submit">
                                        Edit Genre
                                    </Button>
                                </Form.Group>
                            </Form>
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