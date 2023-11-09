import React from 'react'
import { skills_frontEnd } from '../data'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Skills_frantEnd = () => {
  return (
    <>
    {skills_frontEnd.map(({title,percentage},index)=>{
      return(
        <div className="progress__box" key={index}>
          <div className="progress__circle">
            <CircularProgressbar strokeWidth={7.5} text={`${percentage}%`} value={percentage}/>
          </div>
          <h3 className="skills__title">{title}</h3>
        </div>
      )
    })}
    </>
  )
}

export default Skills_frantEnd