import React from 'react'
import { NavLink, Outlet  , Navigate} from 'react-router-dom';
import { FaUser , FaHome} from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaAlignJustify } from "react-icons/fa6";
import { useAuth } from '../../store/auth';

function AdminLayout() {
  const {user , isLoading} = useAuth();
  console.log ("Admin Layout" , user);

  if (isLoading){
    return <h1>Loading...</h1>
  }

  if (!user.isAdmin) {
    return <Navigate to = {"/"}/>
  }

  return <>
    <header>
        <div className='container'>
            <nav>
                <ul>
                    <li> <NavLink to="/admin/users"><FaUser /> users</NavLink> </li>
                    <li> <NavLink to="/admin/contacts"><IoMdContact /> contacts</NavLink> </li>
                    <li> <NavLink to="/service"> <FaAlignJustify /> services</NavLink> </li>
                    <li> <NavLink to="/"><FaHome /> Home</NavLink> </li>
                </ul>
            </nav>
        </div>
    </header>
    <Outlet/>
  </>
  
}

export default AdminLayout;