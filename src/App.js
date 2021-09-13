
import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route,Redirect  } from "react-router-dom";
import SignUp from './pages/login';
import Register from './pages/register'
import { AppProvider } from "./components/contextapi"
import Conge from "./pages/Conge";
import { AuthProvider } from './context';
import Absence from "./pages/Absence";
import  Recrutement from "./pages/Recrutement"
import Utilisateur from "./pages/Utilisateur"
import Tache from "./pages/Tache"
const App = (props) => {
  console.log(props)
  const isAuthenticated = false
  return (
    <>
      <AuthProvider>
        <AppProvider>
          <BrowserRouter>
            <Navbar />
            <Switch>
           
              <Route path='/' exact component={SignUp} />
             
          
                 <Route path='/Register' component={Register} />
              <Route path='/Absence' exact component={Absence} />
              <Route path='/Recrutement' exact component={Recrutement} />
              <Route path='/Utilisateur' exact component={Utilisateur} />
              <Route path='/Utilisateur/:id' exact component={Utilisateur} />
              <Route path='/Tache' exact component={Tache} />
              <Route path='/Conge' exact component={Conge} />
        
         
           

            </Switch>
          </BrowserRouter>
        </AppProvider>

      </AuthProvider>

    </>
  );
}

export default App;