import React from 'react'
import './RegisterForm.css'
import { FaUser,FaLock, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';



export const RegisterForm = () => {
  return (

    <div className='wrapper'>
        <form action = "">
            <h1>Register</h1>
            <div className="input-box">
                <input type="text" placeholder="Username" required />
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="email" placeholder="Email" required />
                <FaEnvelope className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Password" required />
                <FaLock className='icon'/>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
            <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </form>

    </div>
  )
}
