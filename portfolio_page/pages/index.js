import React from "react";
import Header from "../components/Header/Header";
import classes from "../assets/styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
import arrow from "../assets/icons/arrow.png";
import illustrations from "../assets/images/Illustrations.png";
import  self  from "../assets/images/self.jpg";
import GoldMedal from "../assets/images/medal.jpg"
import Taekwondo from "../assets/images/taekwondo.png"
import Supervisor from "../assets/images/supervisor.jpg"
import Tedx from "../assets/images/tedx.jpg"
import Chess from "../assets/images/chess.jpg"
import tedxleader from "../assets/images/tedxleader.png"
import IT from "../assets/images/it.png"
import volunteer from "../assets/images/volunteer.jpg"
import desktop from "../assets/images/desktop.png";
import Footer from "../components/Footer/Footer";

const projectCard = [
  {
    id: 1,
    title: "Academic Excellence",
    img: GoldMedal,
   
  },
  {
    id: 2,
    title: "Professional player: Grandmaster",
    img: Chess,
  },
  {
    id: 3,
    title: "Professional Taekwondist",
    img: Taekwondo,
  },
  {
    id: 4,
    title: "Supervisor - IDP IELTS",
    img: Supervisor,
  },
  {
    id: 5,

   title: "Speaker - TEDxWiut",
   img: Tedx,
  },
  {
    id: 6,
    title: "Leader - TEDxWIUT",
    img: tedxleader,
  },
  {
    id: 7,

    title: "IT courses",
    img: IT,
  },
  {
    id: 8,
    title: "Volunteer - Red Crescent Society",
    img: volunteer,
  },
];

export default function Home() {
  return (
    <div className={classes.home_wrapper}>
      <div className={classes.container}>
        <Header />
        <div className={classes.banner_wrapper}>
          <div className={classes.left_txt}>
            <h2>Passionate change maker</h2>
            <p className={classes.description}>
              Hi, I’m Sevinch.  I thrive on meaningful interactions with peers and teachers, always seeking opportunities to learn, lead, and make a positive impact.
            </p>
            <div className={classes.hire_section}>
              <button>
                <Image src={arrow} width={20} height={20} />
              </button>
              <p>Hire me now</p>
            </div>
            <p className={classes.proud}>I am proud of collaborating with you</p>
          </div>
          <div className={classes.img_section}>
            <Image priority src={self} />
          </div>
        
        </div>
        <div className={classes.clients_wrapper}>
          <div className={classes.img_section}>
            <Image src={illustrations} />
          </div>
          <div className={classes.right_promise_section}>
            <p className={classes.promise}>
              From Big to Small Clients, Two Things I Always Promise
            </p>
            <div className={classes.divs}>
              <div className={classes.lft_section}>
                <p className={classes.num1}>1</p>
                <div className={classes.inner_txt1}>
                  <p className={classes.txt1}>
                    Fast learning and effectively working 
                  </p>
                 
                </div>
              </div>

              <div className={classes.rght_section}>
                <p className={classes.num1}>2</p>
                <div className={classes.inner_txt2}>
                  <p className={classes.txt1}>Friendly Relationship</p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.projects}>
          <p className={classes.title}>Achievements</p>
          <h4> <a href="/content"> See all ... </a></h4>
          <div className={classes.project_card_wrapper}>
            {projectCard.map((item, id) => (
              <div className={classes.project_card} key={id}>
                <Image src={item.img} width={280} height={190} />
                <p className={classes.border_top}>
                  {item.title}
                </p>
                
              </div>
            ))}
          </div>
        </div>
        <div className={classes.get_touch}>
          <Image src={desktop} width={320} height={340} />
          <div className={classes.txt_wrap}>
            <p className={classes.bold}>Have Any Project in Mind to Collaborate with me?</p>
            <p className={classes.light}>
              Ready to make something creative? Let's get on a call.
            </p>
            <Link href="/contact" passHref>
              <button className={classes.touch_btn}>Get in touch</button>
            </Link>
          </div>
        </div>
        <Footer />
        
      </div>
    </div>
  );
}
