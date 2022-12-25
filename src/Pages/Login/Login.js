import React, { useEffect } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {  useDispatch } from 'react-redux';
import { changeName } from '../../Actions';
import Error from '../../Components/Error/Error';


const Login = ({name, setName}) => {
    
    const dispatch= useDispatch();
   
    const[error, setError]=useState(false); 
    let navigate = useNavigate();
    const handleSubmit= (e) => {
        e.preventDefault();
      
    // dispatch(changeName(name))
    // navigate("/welcome");
    if(!name)
    {
        setError(true);

    }
    else{
        dispatch(changeName(name))
        navigate("/welcome")    

    } 

    }

    
  

  return (
    <div className='login'>
        <div className='text1'>
            Please Enter Your Name
        </div>
    <form id="reset" className='form1' onSubmit={handleSubmit}>
        <label>
            <input type="text" name="name" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)}/>
        </label>
            <button className='button' type="submit"  >Submit</button>  
    </form>
    {error && <Error/>}

    </div>
  )
}
    
export default Login

/* if(!setName)
{
    setError(true);
}
else{
    dispatch(changeName(setName))

    setError(true);
}
*/