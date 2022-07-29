import React from 'react'
import './Addemploy.css'
import Employcontactdet from './Employcontactdet'

const Addemploy = () => {
  return (
    <div id='employ'>
      <div className="fullName">
        <label htmlFor="employ__fullName">Employee Full Name</label>
        <input type="text" id='employ__fullName' />
      </div>
      <div className="employId">
      <label htmlFor="employ__employId">Employee Id</label>
      <input type="text" id='employ__employId' />
      </div>
      <div className="save">
      <a href="/employcontactdet"><input type="submit" id='employ__submit' value='Save' /></a>
      </div>
      <div className="cancel">
      <input type="submit" id='employ__cancel' value='cancel' />
      </div>
    </div>
  )
}

export default Addemploy
