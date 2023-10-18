import React from "react";
import idp from "../assets/images/idp.jpg";
import Header from "../components/Header/Header";
import Image from "next/image";
import classes from "./Supervisor/Supervisor.module.scss"
const Supervisor = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <div className={classes.content_inside}>
        <div className={classes.text_wrapper}>
          <h2>Work experience at IDP Edu- Action</h2>
          <p>
            IDP IELTS is an international company that evaluates level of
            English language of students. I started working here approximately 3
            years ago as an invigilator. I really like this friendly atmosphere.
            Later, I become a supervisor - promotion from invigilator. We have
            helped to thousands of applicants to get their scores and apply to
            universities with those scores. In addition, I have created a new
            system that allowed applicants to register from a distance. It
            became a huge benefit, increasing the number of applicants and
            creating a comfort for people.
          </p>
        </div>
        <Image src={idp} width={500} height={400} />
      </div>
    </div>
  );
};

export default Supervisor;
