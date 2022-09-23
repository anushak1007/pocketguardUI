import SignUp from "./SignUP";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from 'react'
export default function MyRouter() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/register" element={<SignUp/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}