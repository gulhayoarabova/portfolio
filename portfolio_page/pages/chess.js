import React from 'react'
import chess1 from "../assets/images/chess4.jpg"
import chess2 from "../assets/images/chess1.jpg"
import chess3 from "../assets/images/chess2.jpg"
import chess4 from "../assets/images/chess3.jpg"
import classes from "./Chess/Chess.module.scss"
import Image from "next/image";
import Header from '../components/Header/Header'

const Chess = () => {
  return (
    <div className={classes.wrapper}>
      <Header/>
        <div className={classes.content_inside}>
        <div className={classes.text_wrapper}>
        <h2>Professional chess player: I am a grandmaster.</h2>
        <p>
          I have been playing chess since I was 11 years old. I won a lot of
          national and international competitions during this 6 - year period. I
          was a finalist in Asian competition. 
       
        </p>
          <p>  Chess taught me to think
          carefully before making steps!</p>
          <p>  This is my passion: for me, life is
          like chess. My favorite figure in chess is pawn because it might
          become a queen if tries hard!</p>
        </div>
      <div className="img_div">
          <Image src={chess3} width={400} height={300}/>

      </div>
      </div>
        <div className={classes.img_wrapper}>
          <Image src={chess1} width={500} height={400}/>
          <Image src={chess2} width={400} height={400}/>
          <Image src={chess4} width={400} height={400}/>

        </div>
    </div>
  )
}

export default Chess