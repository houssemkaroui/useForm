import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
// import { LoginUser } from "./service/service"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import Swal from 'sweetalert2'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
// import _ from "lodash/fp";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

export const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
        marginLeft: 20
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(4),
        },
    },
}));
export const useStyles2 = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),

        width: theme.spacing(40),
        // height: theme.spacing(20),
    },
}));

export default function Register() {
    const classes1 = useStyles2();
    const [role, SetRole] = React.useState('ROLE_ADMIN')
    const [id, Setid] = React.useState({})
    const { handleSubmit, register, errors } = useForm({});
    let history = useHistory();
    function onSubmit(data) {
       

    }
    const classes = useStyles();
    const SelectRole = (event) => {
        SetRole(event.target.value)
        if(event.target.value =='ROLE_ADMIN') {
            Setid({ 'role': [event.target.value] })
        } else if(event.target.value =='ROLE_VENDEUR') {
            Setid({ 'role': [event.target.value] })
        }else {
            Setid({ 'role': [event.target.value] })
        }
        
    }

    return (

        <div className="container">
            <div>
                <img src="https://image.flaticon.com/icons/png/512/295/295128.png" alt="login-icon" width="100px" />
            </div>
            <br></br>


            <Card className="card2"  style={{backgroundColor:"#3e77dc"}}>

                <form onSubmit={handleSubmit(onSubmit)}>


                    <div className={classes.root} noValidate autoComplete="off">

                        <div className="Cform">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" className="input" style={{ width: 400 }}  {...register("email")}></input>

                        </div>

                        <div className="Cform">
                            <label htmlFor="nom">Nom</label>
                            <input type="nom" id="nom" name="nom" className="input" style={{ width: 400 }}  {...register("nom")}></input>
                        </div>
                        <div className="Cform">
                            <label htmlFor="username">Prenom</label>
                            <input type="username" id="prenom" name="prenom" className="input" style={{ width: 400 }}  {...register("prenom")}></input>
                        </div>
                        <div className="Cform">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" className="input" style={{ width: 400 }}  {...register("password")}></input>
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




    )

}