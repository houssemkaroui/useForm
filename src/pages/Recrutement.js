import React,{useEffect,useContext} from 'react';
import { Col, Row } from 'react-bootstrap';
import { Line,Radar } from 'react-chartjs-2';
import Carousel from 'react-bootstrap/Carousel'
import {AppContext} from "../components/contextapi"
import {AuthProvider} from "../context"


function Recrutement() {
  const [message, setMessage] = React.useContext(AppContext);

  useEffect(() => {
    setMessage(true)
  }, [])
  
  
 
  return (
    <div className='recrutement'>
      Recrutement
    </div>
  );
}

export default Recrutement;
