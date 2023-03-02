import React from 'react'
import { Link } from 'react-router-dom'
import tick from './check_circle_FILL0_wght400_GRAD0_opsz48.png'
import "./style.css"

const Modal = () => {
  return (
    <div className='background'><div className="modalWindow">
        <div className='title'>Order Succesful<span><img src = {tick}/></span></div>
        <button className='homeButton'><Link to='/'>Go to home</Link></button>
    </div></div>
    
  )
}

export default Modal