import React, { useEffect, useContext, useState } from 'react';
import { Line, Radar } from 'react-chartjs-2';
import Carousel from 'react-bootstrap/Carousel'
import { AppContext } from "../components/contextapi"
import { AuthProvider } from "../context"
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { useForm } from "react-hook-form";
import {Listeconger,addconger} from "../service/service"


function Conge() {
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
    Listeconger().then((res) => {
      console.log(res.data.data)
      setUser(res.data.data)

    }).catch(e => {

    });
  }
  function onSubmit(data) {
    addconger(data).then(res => {
      console.log(res)
      listeutilisateur();
      setShow(false)

    })
      .catch((e) => {

      })
  }
  return (
    <div className='conge' style={{ marginTop: 30, marginLeft: 30 }}>
      <Row>
        <Col sm={12}>
          <Button variant="primary" onClick={handleShow}>Ajouter Congé</Button>
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Table striped bordered hover style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>#</th>
                <th>Raison</th>
                <th>Date Debut</th>
                <th>Date Fin</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {
                            user.map((item, index) =>
                            <tr>
                <td>{index+1}</td>
                <td>{item.raison}</td>
                <td>{item.dateDebut}</td>
                <td>{item.dateFin}</td>
     
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
      <form  onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un Congé</Modal.Title>
        </Modal.Header>
        <Modal.Body>
  
            <Form.Group className="mb-3" controlId="text">
              <Form.Label>Raison</Form.Label>
              <Form.Control type="text" placeholder="Enter Raison" {...register("raison")}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Date Debut</Form.Label>
              <Form.Control type="date" placeholder="Enter email" {...register("dateDebut")}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Date Fin</Form.Label>
              <Form.Control type="date" placeholder="Enter email" {...register("dateFin")}/>
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

export default Conge;
