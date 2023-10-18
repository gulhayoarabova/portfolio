import React from 'react'
import tedx1 from "../assets/images/tedxspeaker.jpg"
import tedx2 from "../assets/images/tedxspeaker2.jpg"
import tedxlicense from "../assets/images/tedxspeakerlicense.jpg"
import classes from "./Speaker/Speaker.module.scss"
import Image from 'next/image'
import Header from '../components/Header/Header'
const Speaker = () => {
  return (
    <div className={classes.wrapper}>
      <Header/>
             <div className={classes.content_inside}>
              <div className={classes.text_wrapper}>
        <h2>A speaker in TedxWIUT</h2>
        <p>
          I was volunteering a lot in this kind of TEDx - independently
          organized events every year. Later I applied for being a speaker. I
          was selected from hundreds of applicants last year in 2022 thanks to
          my idea. I have worked on my speech by going to trainings and
          rehearsals. In December, I have given a speech to a public in
          Westminster International University. It was released in YouTube
          approximately 3 months later. During less time period, my video has
          reached more than 1000 views with a topic - “three steps towards
          success”, where I shared my true story that I have experienced. Link
          for the video:
        </p>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/A0zxcI6-fQM?si=mwfPFLAnw0pOU9ON" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      </div>
         <div className={classes.img_wrapper}>
          <Image src={tedx1} width={480} height={400}/>
          <Image src={tedx2} width={550} height={300}/>
          <Image src={tedxlicense} width={550} height={300}/>
         

        </div>
    </div>
  )
}

export default Speaker