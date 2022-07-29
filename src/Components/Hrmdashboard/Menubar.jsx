import React from 'react'
import './Menubar.css'

const Menubar = () => {
  return (
    <div id='menubar'>
      <a href="/addemploy"><button>Add Employee</button></a>
      <a href="/employlist"><button>Employee List</button></a>
    </div>
  )
}

export default Menubar
