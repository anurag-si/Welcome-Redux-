import React from 'react'
import './Welcome.css'
import { useSelector, useDispatch } from 'react-redux';
import { clear } from '../../Actions';
import { useNavigate } from 'react-router-dom'

const Welcome = ({name, setName}) => {
  const changeNames = useSelector(state => state.changeName);
  const dispatch= useDispatch();
  let navigate = useNavigate();
  const handleClick = () => {
      dispatch(clear())
      setName("")
      navigate("/")
  }
  return (
    <div className='welcome' >
      Welcome {changeNames}
      <button onClick={handleClick}>Clear and write again</button>
    </div>
    
  )
}

export default Welcome