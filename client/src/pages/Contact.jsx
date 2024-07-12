import { useState } from "react";
import { useAuth } from "../store/auth";

const defaultContactFormData = {

  username: "",
  email: "",
  message: "",

};

function Contact () {
  const [contact, setContact] = useState(
    // username: "",
    // email: "",
    // message: "",
    defaultContactFormData
  );

  //to set userData
  const [userData , setUserData] = useState(true);

  //get user data from auth
  const {user} = useAuth();

  if (userData && user){
    setContact({
      username:user.username,
      email:user.email,
      message:""
    })

    setUserData(false);
  }

  // lets tackle our handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // handle fomr getFormSubmissionInfo
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/form/contact` , {
        method : "POST",
        headers:{
          'Content-Type' : "application/json"
        },
        body:JSON.stringify(contact),
      });

      if (response.ok){
        setContact (defaultContactFormData);
        const data = await response.json();
        console.log(data);
        alert("Message has been send Successfully!!!");
      }


      
    } catch (error) {
      console.log("Error in contact form Submission");
    }

    console.log(contact);
  };



  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Contact Us</h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/contact.png" alt="we are always ready to help" />
          </div>

          {/* contact form content actual  */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>

              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>

        <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.9680767327854!2d78.99280957503508!3d21.153668680527097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4eaf2dff35113%3A0x57b5f524016d746c!2s182%2C%20Gajanan%20Society%2C%20Krishna%20Nagar%2C%20Duttawadi%2C%20Nagpur%2C%20Maharashtra%20440023!5e0!3m2!1sen!2sin!4v1718549881846!5m2!1sen!2sin" 
        width="100%" 
        height="450" 
        allowFullScreen 
        loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        </section>

        
      </section>
    </>
  );
}

export default Contact