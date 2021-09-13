import React, { useEffect, useContext, useState } from 'react';
import { Line, Radar } from 'react-chartjs-2';
import Carousel from 'react-bootstrap/Carousel'
import { AppContext } from "../components/contextapi";
import { AuthProvider } from "../context"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useForm } from "react-hook-form";
import {Listetache,addtache} from "../service/service"

function Tache() {
    const [message, setMessage] = React.useContext(AppContext);
    const { handleSubmit, register, errors } = useForm({});
    const [user,setUser] = React.useState([])

    useEffect(() => {
        setMessage(true)
        listeutilisateur()
    }, [])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const listeutilisateur = () => {
        Listetache().then((res) => {
          console.log(res.data.data)
          setUser(res.data.data)
    
        }).catch(e => {
    
        });
      }
      function onSubmit(data) {
        addtache(data).then(res => {
          console.log(res)
          listeutilisateur();
          setShow(false)
    
        })
          .catch((e) => {
    
          })
      }
    return (
        <div className='utilisateur' style={{ marginTop: 30, marginLeft: 30 }}>
            <Row>
                <Col sm={12}>
                    <Button variant="primary" onClick={handleShow}>Ajouter Tache</Button>
                </Col>
            </Row>
            <Alert variant='primary' style={{marginTop:20,position:'inherit'}}>
        <p style={{color:'black'}}>
        La liste de tous les Taches
        </p>
      </Alert>
            <Row>
                <Col sm={12}>
                    <Table striped bordered hover style={{ marginTop: 20 }}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>description</th>
                                <th>affecter</th>
                                <th>Date Fin</th>
                                <th>Date Debut</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            user.map((item, index) =>
                            <tr>
                <td>{index+1}</td>
                <td>{item.description}</td>
                <td>{item.affecter}</td>
                <td>{item.dateDebut}</td>
                <td>{item.dateFien}</td>
                <td>
                  <img style={{ cursor: 'pointer' }} onClick={handleShow} src="https://img.icons8.com/fluency/48/000000/filled-trash.png" />
                  <img style={{ cursor: 'pointer' }} src="https://img.icons8.com/color/48/000000/edit--v1.png" />
                </td>
              </tr>
                          )
              }
                        </tbody>
                    </Table>
                </Col>

            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter une Tache</Modal.Title>
                </Modal.Header>
                <form  onSubmit={handleSubmit(onSubmit)}>
                <Modal.Body>
                    
                <Form.Group className="mb-3" controlId="debut">
                            <Form.Label>Affecter a</Form.Label>
                            <Form.Control type="text" placeholder="Enter description" {...register("affecter")}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="debut">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter description" {...register("description")}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="debut">
                            <Form.Label>Date Debut</Form.Label>
                            <Form.Control type="date" placeholder="Enter email" {...register("dateDebut")}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="fin">
                            <Form.Label>Date Fin</Form.Label>
                            <Form.Control type="date" placeholder="Enter email" {...register("dateFien")}/>
                        </Form.Group>
                 

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Save Changes
                    </Button>
                </Modal.Footer>
                </form>
            </Modal>
        </div>
    );
}

export default Tache;
