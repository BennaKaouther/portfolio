import React from 'react'
import monPhotpo from '../../assets/monPhoto.png'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import "./home.css"

const Home = () => {
  return (
    <section className='home section grid'>
      <img src={monPhotpo} alt="" className='home__img' />

      <div className='home__content'>
        <div className='home__data'>
          <h1 className='home__title'>
            <span>I'm Benna Kaouther.</span> Web & Software Developer
          </h1>
          <p className='home__description'>I am a full stack web and software developer. 
          I have been passionate about computers since a young age. 
          Today, I master different computer languages ​​such as 
          Front-end (HTML5, CSS3, Javascript, TypeScript, React Js, Bootsrap, Redux) 
          Back-end (MongoDB, express JS, Node JS) and many others Windev
          </p>
          <Link to='/about' className='button'>
            More About Me <span className='button__icon'><FaArrowRight /></span>
          </Link>
        </div>
      </div>
      <div className='color__block'>

      </div>
    </section>
  )
}

export default Home