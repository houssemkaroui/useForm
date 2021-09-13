import React,{useEffect,useContext} from 'react';
import {AppContext} from "../components/contextapi"
import {AuthProvider} from "../context"


function Absence() {
  const [message, setMessage] = React.useContext(AppContext);

  useEffect(() => {
    setMessage(true)
  }, [])
  
  
 
  return (
    <div className='absence'>
      absence
    </div>
  );
}

export default Absence;
