import SignUp from "./SignUP";
import Login from "./Login";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from 'react'
import Dashboard from "./Dashboard";
export default function MyRouter(props) {
  
  
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/register" element={<SignUp/>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}