import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginForm } from '../LoginForm/LoginForm'
import { RegisterForm } from '../RegisterForm.jsx/RegisterForm'


export const Body = () => {
  return (
    <div>
        <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm/>} />
        </Routes>
    </div>
  )
}
