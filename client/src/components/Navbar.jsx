import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css";
import { useAuth } from '../store/auth';


export function Navbar() {

    const { isLoggedIn } = useAuth();

    //console.log (import.meta.env.VITE_BACKEND_URL);

    
  return (
    <>
    <header>

        <div className="container">
            <div className="logo-brand">
                <NavLink to='/'>TechPath</NavLink>
            </div>

            <nav>
                <ul>
                    <li> <NavLink to='/' >Home</NavLink> </li>
                    <li> <NavLink to='/about' >About</NavLink> </li>
                    <li> <NavLink to='/service'>Services</NavLink> </li>
                    <li> <NavLink to='/contact'>Contact</NavLink> </li>
                    {isLoggedIn ? (
                    <li><NavLink to='/logout'>Logout</NavLink></li>
                    ) : (
                    <>
                        <li><NavLink to='/login'>Login</NavLink></li>
                        <li><NavLink to='/register'>Register</NavLink></li>
                    </>
                    )}
                </ul>
            </nav>
        </div>

    </header>
    </>
  )
}

// export default Navbar