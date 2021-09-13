import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import React, { useState,useEffect,createContext } from "react";
// import { LoginUser } from "./service/service"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import Swal from 'sweetalert2'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
// import _ from "lodash/fp";
import { Redirect } from "react-router-dom";
import {Link} from 'react-router-dom';
import {Signin} from '../service/service'
import {AppContext} from "../components/contextapi"
import { loginUser, useAuthState, useAuthDispatch } from '../context';
//import Swal from 'sweetalert2/dist/sweetalert2' 


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(4),
    },
  },
}));
const Name = createContext();

export default function Login() {
  const dispatch = useAuthDispatch();
	const { loading, errorMessage } = useAuthState();
    const [message, setMessage] = React.useContext(AppContext);
useEffect(() =>{

})
  const { handleSubmit, register, errors } = useForm({});
  let history = useHistory();

 async function onSubmit (data) {
    let response = await loginUser(dispatch, data);
    console.log(response)
    if (!response) return;
    // const Toast = Swal.mixin({
    //   toast: true,
    //   position: 'top-end',
    //   showConfirmButton: false,
    //   timer: 3000,
    //   timerProgressBar: true,
    //   didOpen: (toast) => {
    //     toast.addEventListener('mouseenter', Swal.stopTimer)
    //     toast.addEventListener('mouseleave', Swal.resumeTimer)
    //   }
    // })
    
    // Toast.fire({
    //   icon: 'success',
    //   title: 'Signed in successfully'
    // })
    history.push('/Conge')
    setMessage(true)
  
  }
  const classes = useStyles();
  return (
    <Name.Provider>
    <div className="container">
      <div>
        <img src="https://image.flaticon.com/icons/png/512/295/295128.png" alt="login-icon" width="100px" />
      </div>
      <br></br>


      <Card className="card2" style={{backgroundColor:"#3e77dc"}}>

        <form onSubmit={handleSubmit(onSubmit)}>


          <div className={classes.root} noValidate autoComplete="off">

            <div className="Cform">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" name="email" className="input" style={{ width: 400 }}  {...register("email")}></input>
             
            </div>

            <div className="Cform">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" className="input" style={{ width: 400 }}  {...register("password")}></input>
             
            </div>
            <div>
              <Link to="/Register" style={{color:""}}>Register</Link>
              {/* <Link to="/reset_Password" style={{ marginLeft: 300 }}>Forget Password</Link> */}

            </div>


          </div>
          <CardActions className="botton-action2" >
            <Button variant="contained" color="primary" type="submit" style={{ bottom: 20 }}>
              SingIn
    </Button>
          </CardActions>
        </form>
      </Card>


    </div>
      
</Name.Provider>

    
  )

}



export {Name};
