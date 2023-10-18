import React from 'react'
import course from "../assets/images/itcourse.jpg"
import classes from "./IT/IT.module.scss"
import Image from 'next/image'
import Header from '../components/Header/Header'
const IT = () => {
  return (
    <div className={classes.wrapper}>
        <Header/>
      <div className={classes.content_inside}>
        <div className={classes.text_wrapper}>
        <h2>Online courses + knowledge of IT</h2>
        <p>
          Having found out what to expect to study at university and find
          passion, I have finished various types of courses in learning
          platforms, such as Coursera: Cybersecurity for everyone, computer
          science, Python, and others.
        </p>
        <p> In addition, I have received certificates
          of graduation programming languages offline in courses with a tutor in
          Tashkent. I have done projects with Python.</p>
        <p> In addition, I was a
          leader of my class at school and won IT Olympiads annually.</p>
        </div>

        <Image src={course} width={550} height={400}/>
      </div>
    </div>
  )
}

export default IT