import React from 'react'
import classes from "./Academic/Academic.module.scss"
import Header from '../components/Header/Header'
import goldmedal from '../assets/images/goldmedal.jpg'
import Image from 'next/image'
const Academic = () => {
  
  return (
    <div className={classes.wrapper}>
      <Header/>
    <div className={classes.content_inside}>
      <div className={classes.text_wrapper}>
    <h2>Graduated high school with Golden Medal - top 1 %</h2>
    <p>
      I graduated Tashkent State school with Golden Medal. It is an award
      which is given to top 1 % students in Uzbekistan. Thanks to studying
      hard, maintaining a perfect GPA - 5.0/5.0 during a four - year
      period, and participating in school events as well as winning IT
      Olympiads each year and improving reputation of my school, I was
      awarded with Golden Medal by our governor in June in 2023 in
      Tashkent, a capital of Uzbekistan. Only four students managed to
      receive Golden Medal from my school.
    </p>
    </div>
    <Image src={goldmedal} width={600} height={450}/>
  </div>
  </div>
  )
}

export default Academic