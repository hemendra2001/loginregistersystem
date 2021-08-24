import React from 'react'
import Navbar from './../components/Navbar';
import {Button, FormControl, FormGroup, Input, InputLabel, makeStyles} from '@material-ui/core';
import { useState} from 'react';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
    formgroup:{
        marginTop:'50px'
    },  
})


const Register = () => {

const[data,setData] = useState({
    username:'',email:'',password:'',
})
const[err,setError] = useState(false);
const history = useHistory();

const handleInput = (e) =>{
    setData({...data,[e.target.name]:e.target.value})
}

const regisUser = async(e) =>{
    e.preventDefault();



    const{username,email,password} = data;

try{
    const res = await fetch('/regisUser',{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            username,email,password
        })
    })
    const userData = await res.json();
    if(res.status === 200 && username && email && password){
        window.alert(userData.Success)
        history.push("/")
    }
     setError(userData.Message);
    

}
catch(err){
    console.log(err)
}

}

    const classes = useStyles();
    return (
        <>
            <Navbar />

            <div className="container">
                <h3 className='text-danger mt-5 lead'>{err}</h3>
       

                <FormGroup className={classes.formgroup}>
                    
                <FormControl>
                        <InputLabel>Username</InputLabel>
                        <Input name="username" value={data.username}  onChange = {handleInput} autoComplete="off"/>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Email</InputLabel>
                        <Input name="email" type="email" value={data.email}  onChange = {handleInput} autoComplete="off"/>
                    </FormControl>

                    <FormControl>
                        <InputLabel>Password</InputLabel>
                        <Input name="password" type="password" value={data.password}  onChange={handleInput}/>
                    </FormControl>
                </FormGroup>
                <Button className='mt-3' onClick={regisUser} variant='contained'>Register</Button>
            </div>
        </>
    )
}

export default Register
