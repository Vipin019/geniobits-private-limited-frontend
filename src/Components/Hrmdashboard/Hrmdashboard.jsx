import React from 'react'
import './Hrmdashboard.css'
import Navbar from '../Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menubar from './Menubar';
import Addemploy from './Addemploy';
import Employlist from './Employlist';
import Employcontactdet from './Employcontactdet'

const Hrmdashboard = () => {
  return (
    <div>
    <Navbar></Navbar>
    <Menubar></Menubar>
    <BrowserRouter>
      <Routes>
        <Route exact path="/addemploy" element={<Addemploy/>}/>
        <Route exact path="/employlist" element={<Employlist/>}/>
        <Route exact path="/employcontactdet" element={<Employcontactdet/>}/>

      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Hrmdashboard
