import React from "react";
import './style.css'
import Logo from '../../imgs/world-icon.svg'

export default function Navbar(){
    return (
        <nav>
            <img src={Logo} />
            <span className="nav-title">My journal travel</span>
        </nav>
    )
}