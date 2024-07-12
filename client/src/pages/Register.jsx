import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

function Register() {

  const [user , setUser] = useState({
    username : "",
    email : "",
    phone : "",
    password : "",
  })



  const navigate = useNavigate();

  const {storeTokenInLS }= useAuth();

  //handling the input values
  const handleInput = (event) => {

    console.log (event);
    let name = event.target.name;
    let value = event.target.value;

    setUser({
      ...user,
      [name ]: value
    })


  }

  // Handling the submission of the 
  const handleSubmit = async (event) => {
    event.preventDefault();
    //alert(user);
    console.log(user);

    try {

      //handling response similar to PostMan
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/register` , {
        method:"POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(user)

      })

     // console.log(response);
      const response_data = await response.json();
      console.log("Reponse from server" , response_data.message);

      if (response.ok) {
        
        

        //Store the token in LocalStorage
        storeTokenInLS (response_data.token);

        // localStorage.setItem("token" , response_data.token);

        setUser({
          username : "",
          email : "",
          phone : "",
          password : "",
        })
        toast.success("Registration Sucessfull !!!")
        navigate("/login");
      }else {
        toast.error(response_data.extraDetails ? response_data.extraDetails : response_data.message);
      }

    
      
    } catch (error) {

      console.log("Register" , error);
      
    }

  }
  

  return (
    <>
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <img 
            src='/images/register.png' alt='A boy is trying to do registration' 
            width="550"
            height="550"
            />

            {/* Lets tackle registration form */}

            <div className="registration-form">
              <h1 className='main-heading mb-3'>registration form</h1>
              <br />

              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor='username'>username</label>
                  <input 
                    type="text" 
                    name='username' 
                    placeholder='Enter Username Here' 
                    id='username'
                    required
                    autoComplete='off'
                    value={user.username}
                    onChange={handleInput}
                  />
                </div>

                <div>
                  <label htmlFor='email'>email</label>
                  <input 
                    type="email" 
                    name='email' 
                    placeholder='Enter Email Here' 
                    id='email'
                    required
                    autoComplete='off'
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>


                <div>
                  <label htmlFor='phone'>phone</label>
                  <input 
                    type="number" 
                    name='phone' 
                    placeholder='Enter Phone Number Here' 
                    id='phone'
                    required
                    autoComplete='off'
                    value={user.phone}
                    onChange={handleInput}
                  />
                </div>

                <div>
                  <label htmlFor='password'>password</label>
                  <input 
                    type="password" 
                    name='password' 
                    placeholder='Enter Password Here' 
                    id='password'
                    required
                    autoComplete='off'
                    value={user.password}
                    onChange={handleInput}
                  />
                </div>

                <br/>
                <button type='submit' className='btn btn-submit'>
                  Register Now
                </button>

              </form>


            </div>


          </div>
        </div>
      </main>
    </section>
    </>
  )
}

export default Register