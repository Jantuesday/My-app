import React from 'react'
import Lemon from '../assets/logopicture.svg'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/NavBar.css'

function navBar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
           <img src={Lemon} alt='Lemon Logo' className='lemonlogo'/>
           <Link to="/">Home</Link>
           <Link to="/menu">Menu</Link>
           <Link to="/about">About</Link>

        </div>
        <div className='rightSide'>
        <Link to="/reservation">Reservation</Link>
        <Link to="/login">Login</Link>
        <button>
         <ReorderIcon />
        </button>

        </div>
    </div>
  )
}

export default navBar