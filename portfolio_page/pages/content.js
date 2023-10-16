import React from "react";
import Header from "../components/Header/Header";
import classes from "./content.module.scss";
import Image from "next/image";
import chess1 from "../assets/images/chess4.jpg"
import chess2 from "../assets/images/chess1.jpg"
import chess3 from "../assets/images/chess2.jpg"
import chess4 from "../assets/images/chess3.jpg"
import taek from "../assets/images/taekwondo.jpg"
import taek2 from "../assets/images/taekwondo2.jpg"
import idp from "../assets/images/idp.jpg"
import tedx1 from "../assets/images/tedxspeaker.jpg"

import tedx2 from "../assets/images/tedxspeaker2.jpg"
import tedxlicense from "../assets/images/tedxspeakerlicense.jpg"
import tedx3 from "../assets/images/tedxleader.jpg"

import tedx4 from "../assets/images/leader2.jpg"
import IT from "../assets/images/itcourse.jpg"
import red from "../assets/images/red.jpg"








import goldmedal from "../assets/images/goldmedal.jpg";
const Content = () => {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.content_part}>
        <div className={classes.content_inside}>
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
          <Image src={goldmedal} />
        </div>
      </div>
      <div className={classes.content_inside}>
        <h2>Professional chess player: I am a grandmaster.</h2>
        <p>
          I have been playing chess since I was 11 years old. I won a lot of
          national and international competitions during this 6 - year period. I
          was a finalist in Asian competition. Chess taught me to think
          carefully before making steps! This is my passion: for me, life is
          like chess. My favorite figure in chess is pawn because it might
          become a queen if tries hard!
        </p>
        <div className={classes.img_wrapper}>
          <Image src={chess1} width={500} height={300}/>
          <Image src={chess2} width={400} height={300}/>
          <Image src={chess3} width={400} height={300}/>
          <Image src={chess4} width={400} height={300}/>

        </div>
      </div>
      <div className="content_inside">
        <h2>A professional taekwondist</h2>
        <p>
          I have been doing this sport since 2018. During this 5-year period, I
          have won a lot of national and international competitions with my
          team. I am a captain of my team. I have received black belt - an
          indicator of being advanced in this field. I managed to open my own
          group and train them as a coach.
        </p>
        <div className={classes.img_wrapper}>
          <Image src={taek} width={500} height={300}/>
          <Image src={taek2} width={500} height={400}/>
          

        </div>
      </div>
      <div className={classes.content_inside}>
        <h2>Work experience at IDP Edu- Action</h2>
        <p>
          IDP IELTS is an international company that evaluates level of English
          language of students. I started working here approximately 3 years ago
          as an invigilator. I really like this friendly atmosphere. Later, I
          become a supervisor - promotion from invigilator. We have helped to
          thousands of applicants to get their scores and apply to universities
          with those scores. In addition, I have created a new system that
          allowed applicants to register from a distance. It became a huge
          benefit, increasing the number of applicants and creating a comfort
          for people.
        </p>
        <Image src={idp} width={500} height={400}/>
      </div>
      <div className={classes.content_inside}>
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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/A0zxcI6-fQM?si=mwfPFLAnw0pOU9ON" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         <div className={classes.img_wrapper}>
          <Image src={tedx1} width={480} height={400}/>
          <Image src={tedx2} width={550} height={300}/>
          <Image src={tedxlicense} width={550} height={300}/>
         

        </div>
      </div>
      <div className={classes.content_inside}>
        <h2>A leader of TedxWIUT</h2>
        <p>
          In the start of 2023, I have created a google form and choose a new
          team member, which included curators, SMM members, mobilographer,
          photographer, and event managers. I was also a curator, not only a
          leader. We have selected 5 speakers. I have managed to create a
          friendly atmosphere, organized trainings, and rehearsals every week,
          worked with speakers. This year, we are planning to have five events.
          The first one was on 26th of August in 2023. We help all unique ideas
          to spread out around the world! In addition to leading a team, working
          with speakers, I was a host and interviewer like a journalist in
          events. I have also helped with a new project: opening a new TEDxTMC
          institute. In this way, we have created more opportunities for people
          to spread their brilliant ideas and experience around the world for
          changing it.
        </p>
        <div className={classes.img_wrapper}>
          <Image src={tedx3} width={480} height={400}/>
          <Image src={tedx4} width={550} height={300}/>
         

        </div>
      </div>
      <div className={classes.content_inside}>
        <h2>Online courses + knowledge of IT</h2>
        <p>
          Having found out what to expect to study at university and find
          passion, I have finished various types of courses in learning
          platforms, such as Coursera: Cybersecurity for everyone, computer
          science, Python, and others. In addition, I have received certificates
          of graduation programming languages offline in courses with a tutor in
          Tashkent. I have done projects with Python. In addition, I was a
          leader of my class at school and won IT Olympiads annually.
        </p>
        <Image src={IT} width={550} height={400}/>

      </div>
      <div className={classes.content_inside}>
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
        <Image src={red} width={400} height={400}/>

      </div>
      <div className={classes.content_inside}>
        <h2>Have created an app.</h2>
        <p>
          Nowadays, I with my team are working on creating an app. It will be a
          learning platform for studying programming, computer science, and
          other skills. We have come up with this idea because courses like
          Coursera, Udemy.uz might be expensive for people in my country,
          especially students since currency here is som. With our app, people
          can learn the same knowledge without spending that much money. Now, we
          are working on recording my online courses. We will finish until
          November. At the same time, we are participating in national IT
          competition with our app.
        </p>
      </div>
      <div className={classes.content_inside}>
        <h2>Singing, talking in public</h2>
        <p>
          I feel like I have a talent for it. I sing in events. My favorite type
          of music is pop music. In addition, I like talking in public. I have
          discovered this passion when I was working with my team - TEDxWIUT,
          was a host in events, took interviews, gave lectures and motivation
          from IT at TKTI university. Having worked with a team, I have improved
          my skills as a leader and group mate. I have managed to create a
          friendly atmosphere in all my teams as well as balance.
        </p>
      </div>
    </div>
  );
};

export default Content;
