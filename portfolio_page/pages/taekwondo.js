import React from 'react'
import taek from "../assets/images/taekwondo.jpg"
import taek2 from "../assets/images/taekwondo2.jpg"
import taek3 from "../assets/images/taek3.jpg"
import Link from 'next/link'
import classes from "./Taekwondo/Taekwondo.module.scss"
import Image from 'next/image'
import Header from '../components/Header/Header'

const Taekwondo = () => {
  return (
    <div className={classes.wrapper}>
      <Header/>
 <div className={classes.content_inside}>
  <div className={classes.text_wrapper}>
        <h2>A professional taekwondist</h2>
        <p>
          I have been doing this sport since 2018. During this 5-year period, I
          have won a lot of national and international competitions with my
          team. I am a captain of my team. I have received black belt - an
          indicator of being advanced in this field. I managed to open my own
          group and train them as a coach.
        </p>
     <a className={classes.certificate} href="./taekwondo.pdf">Certificate</a>
        </div>
        
          <Image src={taek3} width={500} height={400}/>
      </div>
        <div className={classes.img_wrapper}>
          <Image src={taek} width={500} height={300}/>
          <Image src={taek2} width={500} height={450}/>
        </div>
    </div>
  )
}

export default Taekwondo