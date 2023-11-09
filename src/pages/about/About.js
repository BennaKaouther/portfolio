import React from 'react'
import Info from '../../components/info'
import Stats from '../../components/stats'
import { FaDownload } from 'react-icons/fa'
import CV from '../../assets/BennaKaouther_CV_Developpeuse_Full_stack.pdf'
import "./about.css"
import Skills_frantEnd from '../../components/skills_frontEnd'
import Skills_backEnd from '../../components/skills_backEnd'
import Skills_software from '../../components/skills_software'
import {resume} from "../../data"
import Experience from '../../components/resumeItem'
const About = () => {
  return (
    <main className='section container'>
      <section className='about'>
        <h2 className='section__title'>About <span>Me</span></h2>
        <div className="about__container grid">
          <div className="about_info">
            <h3 className="section__subtitle">
              Personal Infos
            </h3>
            <ul className="info__list grid">
              <Info />
            </ul>
            <a href={CV} download="" className="button">Download CV
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>

          </div>
          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>
      <div className="separator"></div>
      <section className="skills">
        <h3 className="section__subtitle subtitle_center">My Skills</h3>
        <div className="skills__container grid">
          <h3 className="section__subtitle">front-end Skills </h3>
          <div className="skills__Detail grid">
            <Skills_frantEnd />
          </div>
        </div>
        <div className="skills__container grid">
          <h3 className="section__subtitle">back-end Skills </h3>
          <div className="skills__Detail grid">
            <Skills_backEnd />
          </div>
        </div>
        <div className="skills__container grid">
          <h3 className="section__subtitle">Other Skills</h3>
          <div className="skills__Detail grid">
            <Skills_software />
          </div>
        </div>
      </section>
      <div className="separator"></div>
      <section className="resume">
        <h3 className="section__subtitle subtitle_center">Experience & Education</h3>
        <div className="resume__container grid">
          <div className="resume__data">
            {resume.map((val)=>{
              if(val.category==='experience'){
                return <Experience key={val.id}  {...val}/>
              }
            })}
          </div>
          <div className="resume__data">
            {resume.map((val)=>{
              if(val.category==='education'){
                return <Experience key={val.id}  {...val}/>
              }
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About