import React from 'react'
import Navbar from './../components/Navbar';
import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { useHistory } from 'react-router';

// import axios from 'axios'

const useStyles = makeStyles({
    formgroup: {
        marginTop: '50px'
    },
})

const Login = () => {

    const [data, setData] = useState({
        email: '', password: '',
    })
    const[err,setError] = useState(false);
    const history = useHistory();

    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const loginUser =  async(e) => {
        e.preventDefault();



        const { email, password } = data;
            const res = await fetch("/logUser", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    email, password
                })
            })
            const userData = await res.json();
            if(email && password && res.status === 200){
               history.push('/secret');  
            }else{
                setError(userData.Message);
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
                        <InputLabel>Email</InputLabel>
                        <Input name="email" value={data.email} required onChange={handleInput} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Password</InputLabel>
                        <Input name="password" type="password" required value={data.password} onChange={handleInput} />
                    </FormControl>
                </FormGroup>
                <Button className='mt-3' onClick={loginUser} variant='contained'>LOGIN</Button>
            </div>
        </>
    )
}


export default Login
