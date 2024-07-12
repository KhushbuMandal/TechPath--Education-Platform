// import React from 'react'
// import Navbar from '../components/Navbar'

// function Home() {
//   return (
//     <>
//       <Navbar/>
//       <div>Home</div>
//     </>
    
//   )
// }

// export default Home

import React from 'react'
import Analytics from '../components/Analytics'


function Home() {
  return (
    <>

      <main>
        <section className='section-hero'>
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Unlock Your Potential with the Best Tech Education</p>
              <h1>Welcome To <span style={{ color: '#646cff' }} >TechPath</span></h1>
              <p>
              Ready to take the first step towards a brighter future? Whether you are a complete beginner or looking to enhance your skills, we have a course for you. Our expert instructors and comprehensive curriculum ensure that you gain practical, in-demand skills.
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
                src='/images/home.png' alt='Coding Together'
                width='500'
                height='500'
              />
            </div>


          </div>
        </section>
      </main>

      {/* 2nd Section */}
      <Analytics/>

      {/* 3 section */}

      <section className='section-hero'>
          <div className="container grid grid-two-cols">

             {/* Hero images */}
             <div className="hero-image">
              <img 
                src='/images/home2.png' alt='Coding Together'
                width='500'
                height='500'
              />
            </div>

            <div className="hero-content">
              <p>We are here to help you</p>
              <h1>Get Started Today</h1>
              <p>
              Ready to take the first step towards a brighter future? Enroll in one of our courses today and start building the skills you need to succeed.
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

          </div>
        </section>

    </>
  )
}

export default Home