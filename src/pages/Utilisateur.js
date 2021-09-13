import React, { useEffect, useContext, useState } from 'react';
import { AppContext } from "../components/contextapi"
import { AuthProvider } from "../context"
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import { useForm } from "react-hook-form";
import InputGroup from 'react-bootstrap/InputGroup'
import { ListeUser, addUser, deleteuser, updateuser } from "../service/service"
import { useHistory } from "react-router-dom";


function Utilisateur() {
  let history = useHistory();
  const [message, setMessage] = React.useContext(AppContext);
  const { handleSubmit, register, errors,reset, setValue, getValues, } = useForm({});
  const [validated, setValidated] = useState(false);
  const [edituser, setEdituser] = React.useState()
  const [dattttt, setUser] = React.useState([])
  const [id, setID] = React.useState()
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  useEffect(() => {
    setMessage(true)
    listeutilisateur()
  }, [])

  const handleClose = () => {
    setShow(false)
    setEdituser('')
    history.push("/Utilisateur")
  };
  const handleShow = () => setShow(true);
  const handleClose2 = (item) => {
    setShow2(false)
  };
  const handleShow2 = () => setShow2(true);
  const listeutilisateur = () => {
    ListeUser().then((res) => {
      console.log(res.data.data)
      setUser(res.data.data)
      setShow2(false)
    }).catch(e => {

    });
  }
  const onSubmit = async (data,event) => {
    if (edituser) {
  
     // await updateContact(data);
     setEdituser('')
    } else {
      history.push("/Utilisateur")
      const form = event.currentTarget;
      setValidated(true);
     // await createContact(data);
    }
  };

 
 
  const handelItemCurrency = (item) => {
    setID(item._id)
    setShow2(true)
  }

  
  const handelItemCurrency2 = async(item) => {
    history.push("/Utilisateur/"+item._id)
      const fields = ['nom','prenom','email','phone'];
      fields.forEach(field => setValue(field, item[field]));
    setEdituser(item._id)
    setShow(true)
  }
  const handleDelete = () => {
    deleteuser(id).then((res) => {
      listeutilisateur();
      setShow2(false);

    }).catch(e => {

    });
  }
  return (
    <div className='utilisateur' style={{ marginTop: 30, marginLeft: 30 }}>
      <Row>
        <Col sm={12}>
          <Button variant="primary" onClick={handleShow}>Ajouter Utilisateur</Button>
        </Col>
      </Row>
      <Alert variant='primary' style={{ marginTop: 20, position: 'inherit' }}>
        <p style={{ color: 'black' }}>
          La liste de tous les utilisateurs
        </p>
      </Alert>

      <Row>
        <Col sm={12}>
          <Table striped bordered hover style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                dattttt.map((item, index) =>
                  <tr key={index}>
                    <td >{index + 1}</td>
                    <td >{item.nom}</td>
                    <td>{item.prenom}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <img style={{ cursor: 'pointer' }} onClick={() => handelItemCurrency(item)} src="https://img.icons8.com/fluency/48/000000/filled-trash.png" />
                      <img style={{ cursor: 'pointer' }} onClick={() => handelItemCurrency2(item)}  src="https://img.icons8.com/color/48/000000/edit--v1.png" />
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
          <Modal.Title>{edituser ? "Modifer un Utilisateur" : "Ajouter un Utilisateur"}</Modal.Title>
        </Modal.Header>
        <Form noValidate validated={validated} onSubmit={handleSubmit(onSubmit)} onReset={reset}  >
          <Modal.Body>
            <Form.Group controlId="validationCustom01">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                required
                type="text"
               
                placeholder="First name"   {...register("nom")}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom01">
              <Form.Label>Prenom</Form.Label>
              <Form.Control
                required
                type="text"
                {...register("prenom")}
                placeholder="last name"  
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom01">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="email"   {...register("email")}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="validationCustom01">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                required
                type="text"
               
                placeholder="phone"   {...register("phone")}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
        </Form>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Supprimer un Utilisateur</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Etes-vous sûr de vouloir supprimer ?

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Utilisateur;
