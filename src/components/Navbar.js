import React from 'react'
import {Link} from 'react-router-dom'
import logo from "../assets/logo.png"


function Navbar() {
    const navbar={
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'black',
        color:'white',
        padding:'10px'
    }
  return (
    <div style={navbar}>
            <div>
                <img src={logo} alt="Equip9"/>
            </div>

            <ul style={{listStyleType:'none',padding:'0px'}}>
                <li style={{display:'inline-block',padding:' 10px'}}>
                    <Link to="/" style={{textDecoration:'none',color:'white'}}>Home</Link>
                </li>
                <li style={{display:'inline-block',padding:' 10px'}} >
                    <Link to="/about" style={{textDecoration:'none',color:'white'}}>About</Link>
                </li>
                <li  style={{display:'inline-block',padding:' 10px'}}>
                    <Link to="/form" style={{textDecoration:'none',color:'white'}}>Form</Link>
                </li> 
            </ul>
    
  </div>
  )
}

export default Navbar