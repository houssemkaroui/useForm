import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const { Provider } = AppContext;

export const AppProvider = (props) => {

  const [message, setMessage] = useState(false);
  
return(

   <Provider value={[message, setMessage]}>
      {props.children}
   </Provider>

 );

}