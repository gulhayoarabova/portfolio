import React from 'react'
import tedx3 from "../assets/images/tedxleader.jpg"
import tedx4 from "../assets/images/leader2.jpg"
import tedxleader from "../assets/images/tedxspeaker2.jpg"

import classes from "./Leader/Leader.module.scss"
import Header from '../components/Header/Header'
import Image from 'next/image'
const Leader = () => {
  return (
    <div className={classes.wrapper}>
        <Header/>
      <div className={classes.content_inside}>
        <div className={classes.text_wrapper}>
        <h2>A leader of TedxWIUT</h2>
        <p>
          In the start of 2023, I have created a google form and choose a new
          team member, which included curators, SMM members, mobilographer,
          photographer, and event managers. I was also a curator, not only a
          leader. We have selected 5 speakers. I have managed to create a
          friendly atmosphere, organized trainings, and rehearsals every week,
          worked with speakers. This year, we are planning to have five events.
          
        </p>
        <p>In addition to leading a team, working
          with speakers, I was a host and interviewer like a journalist in
          events.</p>
          <p>The first one was on 26th of August in 2023. We help all unique ideas
          to spread out around the world!  I have also helped with a new project: opening a new TEDxTMC
          institute. In this way, we have created more opportunities for people
          to spread their brilliant ideas and experience around the world for
          changing it.</p>
        </div>
        <Image src={tedxleader} width={500} height={380}/>

      </div>
        <div className={classes.img_wrapper}>
          <Image src={tedx3} width={480} height={400}/>
          <Image src={tedx4} width={550} height={300}/>
        </div>
    </div>
  )
}

export default Leader