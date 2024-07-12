import React, { useEffect, useState } from 'react'
import {useAuth} from '../store/auth';
import { toast } from 'react-toastify';

function AdminContacts() {
  const {authorizationToken} = useAuth();
  const [contactData , setContactData] = useState([]);


  const getContactsData = async () => {

    try {

      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admin/contacts` , {
        method:"GET",
        headers:{
          Authorization:authorizationToken,
        },
      });

      const data = await response.json();
      console.log("Contact Data" , data);
      if (response.ok) {
        //console.log(response);
        setContactData(data);
      }
      
    } catch (error) {
      console.log (error);
    }

  }

  // Defining the function deleteContactbyID

  const deleteContactByID = async (id) => {

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admin/contacts/delete/${id}` , {
        method:"DELETE",
        headers : {
          Authorization : authorizationToken,
        }
      }) ;

      if (response.ok){
        getContactsData();
        toast.success("Deleted Sucessfully !!!")
      }else {
        toast.error("Not Deleted !!!")
      }
    } catch (error) {
      console.log(error);
    }

  }



  useEffect(() => {
    getContactsData();
  },[])

  return (
    <>

    <section className='admin-contacts-section'>
      <h1>Admin Contact Data</h1>

      <div className='container admin-users'>
        {contactData.map((curContactData , index) =>{

          const {username , email , message , _id} = curContactData;

          return (
            <div key={index}>
              <p>{username}</p>
              <p>{email}</p>
              <p>{message}</p>
              <button className="btn" onClick={() => deleteContactByID(_id)}>Delete</button>
            </div>
          )
        })}
      </div>
    </section>
      

    </>
    
  )
}

export default AdminContacts;