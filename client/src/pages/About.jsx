import React, { useState } from 'react'
import Analytics from '../components/Analytics'
import { useAuth } from '../store/auth'

function About() {

  // const [userData , setUserData] = useState(true);
  // const [username , setUserName] = useState("");

  const {user} = useAuth();

  // if (userData && user) {
  //   setUserName({
  //     username : user.username
  //   });
  //   setUserData(false);
  // }


  return (
    <>
      <section className='section-hero'>
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>Welcome {username.username} !!!</p> */}
              <p>Welcome {user ? `${user.username} to our website` : `to our website`} !!!</p>
              <h1>Guaranteed Quality and Excellence</h1>
              <p>
              With a team of seasoned tech professionals, we bring years of industry expertise to our courses. Our instructors are industry leaders who provide hands-on, practical knowledge. This ensures you gain real-world skills that are in high demand.
              </p>
              <p>
              Our commitment to quality is unwavering, ensuring every course is meticulously crafted and up-to-date. Despite our high standards, we believe in making tech education accessible and affordable. Enjoy top-tier education without breaking the bank.
              </p>
              <p>
              Join a vibrant community of learners and tech enthusiasts who support each other’s growth. Our platform provides extensive resources and personalized support to help you succeed. You're never alone on your learning journey with our engaged and responsive community
              </p>
              <p>
              Reliability; Count on us to be there when you need us. We're committed to ensuring your IT environment is reliable and available 24/7.
              </p>
              <div className="btn btn-group">
                <a href='/contact'>
                  <button className='btn'>connect now</button> 
                </a>

                <a href='/service'>
                  <button className='btn secondary-btn'>learn more</button> 
                </a>
              </div>
            </div>

            {/* Hero images */}
            <div className="hero-image">
              <img 
                src='/images/about.png' alt='Coding Together'
                width='100'
                height='100'
              />
            </div>
          </div>
        </section>


        {/* 2nd Section */}
        <Analytics />
    </>
  )
}

export default About