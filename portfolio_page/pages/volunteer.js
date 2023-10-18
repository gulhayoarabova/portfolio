import React from 'react'
import red from "../assets/images/red.jpg"
import classes from "./Volunteer/Volunteer.module.scss"
import Header from '../components/Header/Header'
import Image from 'next/image'
const Volunteer = () => {
  return (
    <div className={classes.wrapper}>
      <Header/>
          <div className={classes.content_inside}>
            <div className={classes.text_wrapper}>
        <h2>A volunteer at Red Crescent Society</h2>
        <p>
          I came as a volunteer at Red Crescent society, a global humanitarian
          network of 80 million people that helps those facing disaster,
          conflict and health an social problems, since 2020. I have finished a
          training, where I have learnt to give the first assist to people and
          how to act. Later, I have opened my club of volunteers who were like
          me, and then we started visiting poor or help needed people and
          helping them financially and emotionally. We also helped to disabled
          children who were keen on learning new skills. We started teaching
          them different subjects: math, English, chess, and Taekwondo. I did my
          best to teach skills that I was advanced at. We were fascinated by
          happiness of them. We easily became connected to them. In addition,
          speaking in 4 languages, I have helped our society to have some
          partnership meetings with foreign organizations. I am happy to be a
          member of our team!
        </p>
        </div>
        <Image src={red} width={400} height={400}/>
      </div>
    </div>
  )
}

export default Volunteer