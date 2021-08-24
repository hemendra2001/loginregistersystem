import React from 'react'
import { useEffect} from 'react'
import {useHistory} from 'react-router-dom';


const Logout = () => {

    const history = useHistory(); 


    
    const logoutUser =() =>{
          fetch('/logoutUser',{
              method:'GET',
              headers:{
                  Accept:"application/json",
                  "Content-type":"application/json"
              },
              credentials:'include'    
          }).then((res)=>{
              history.push('/');
          })
    }

    useEffect(()=>{
        logoutUser();
    },[])
    

    return (
        <div>
            
        </div>
    )
}

export default Logout
