import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login/Login'
import Home from './Home/Home'
import Register from './Register/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
