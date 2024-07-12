import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useAuth } from '../store/auth';

function AdminUsers() {
 
    const [users , setUsers] = useState([]);

    const {authorizationToken} = useAuth();

    const getAllUsersData = async () => {

        try {

            const response = await fetch (`${import.meta.env.VITE_BACKEND_URL}/api/admin/users` , {
                method:"GET",
                headers:{
                    Authorization:authorizationToken
                },
            });
            const data = await response.json();
            console.log(`users ${data}`);
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    } 

    // delete the User in delete button
    const deleteUser = async (id) => {

        try{

            const response = await fetch (`${import.meta.env.VITE_BACKEND_URL}/api/admin/users/delete/${id}` , {
                method:"DELETE",
                headers:{
                    Authorization:authorizationToken
                },
            });
    
    
    
            const data = await response.json();
            console.log(`users  After Delete ${data}`);

            // ab refresh krne ki jarurat nhi hai page ko direct delete ho jayenaga
            if (response.ok) {
                getAllUsersData();
            }

        } catch (error){
            console.log (error);
        }

        
    }

    useEffect(() => {

        getAllUsersData();

    },[]);

  return (
   <>
   <section className='admin-users-section'>
        <div className='container'>
            <h1>Admin Users data</h1>
        </div>
    <div className='container admin-users'>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {users.map((curUser , index) => {
                return (
                <tr key={index}>
                    <td>{curUser.username}</td>
                    <td>{curUser.email}</td>
                    <td>{curUser.phone}</td>
                    <td>
                        <Link to = {`/admin/users/${curUser._id}/edit`}>Edit
                        </Link>
                    </td>
                    <td><button onClick={() => deleteUser(curUser._id)}>Delete</button></td>
                </tr>
                );
            })}
            </tbody>
        </table>
    </div>
    </section>
   </>
  );
}

export default AdminUsers;