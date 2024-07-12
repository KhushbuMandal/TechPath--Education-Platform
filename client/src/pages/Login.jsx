import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const URL = `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`

function Login() {
  const [user , setUser] = useState({

    email : "",
    password : ""

  })

  const navigate = useNavigate();
  const {storeTokenInLS} = useAuth();


  // handle the input box
  const handleInput = (event) => {

    //console.log(event);
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
   // alert(user);
    console.log(user);

    try {

      //handling response similar to PostMan
        const response = await fetch(URL , {
        method:"POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(user)

      })

      console.log("Login Form" , response);
      const response_data = await response.json();
      if (response.ok) {
        alert("Login Sucessful");
        

        //Store the token in LocalStorage
        storeTokenInLS (response_data.token);
        // localStorage.setItem("token" , response_data.token);

        setUser({
          email : "",
          password : "",
        })
        toast.success("Login Sucessfull !!!")
        navigate("/service");
      }else {
        toast.error(response_data.extraDetails ? response_data.extraDetails : response_data.message);
        console.log (response_data);
      }

    
      
    } catch (error) {

      console.log("Login" , error);
      
    }

  }

  return (
    <>
      <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <img 
            src='/images/loginnew.png' alt='A boy is trying to do login' 
            width="500"
            height="500"
            />

            {/* Lets tackle login form */}

            <div className="registration-form">
              <h1 className='main-heading mb-3'>login form</h1>
              <br />

              <form onSubmit={handleSubmit}>

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

export default Login