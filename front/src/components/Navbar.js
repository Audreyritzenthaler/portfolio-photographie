import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to='/' activeClassname='active'>Accueil</NavLink>
                </li>
                <li>
                    <NavLink to='/project' activeClassname='active'>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' activeClassname='active'>Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar