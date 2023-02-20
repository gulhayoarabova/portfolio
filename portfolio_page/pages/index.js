import React from "react";
import Header from "../components/Header/Header";
import classes from "../assets/styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
import arrow from "../assets/icons/arrow.png";
import illustration from "../assets/images/illustration.png";
import illustrations from "../assets/images/illustrations.png";
import pizza from "../assets/images/pizza.jpg";
import skillet from "../assets/images/skilletimg.png";
import bello from  "../assets/images/hero.png"
import rock from "../assets/images/rock.jpg"
import desktop from "../assets/images/desktop.png";
import Footer from "../components/Footer/Footer";
import Card from "../components/Cards/Card";

export default function Home() {
  return (
    <div className={classes.home_wrapper}>
      <div className={classes.container}>
        <Header />
        <div className={classes.banner_wrapper}>
          <div className={classes.left_txt}>
            <p className={classes.red_txt}>FRONTEND DEVELOPER</p>
            <h2>Fast working and high quality projects</h2>
            <p className={classes.description}>
              Hi, I’m Gulhayo. I’m a Frontend developer. If you are looking for
              developer to build your websites and grow your business Let’s
              shake hands with me.
              {/* this is comment */}
            </p>
            <div className={classes.hire_section}>
              <button>
                <Image src={arrow} width={20} height={20} />
              </button>
              <p>Hire me now</p>
            </div>
            <p className={classes.proud}>We are proud of working with you</p>
          </div>
          <div className={classes.img_section}>
            <Image src={illustration} />
          </div>
          <div className={classes.right_txt}>
            <p className={classes.txt1}>Portfolio Landing UI</p>
            <p className={classes.txt2}>
              <a
                href="./GulkhayoResume.pdf"
                alt="alt text"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download FIle
              </a>
            </p>
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
                    Fast and effectively working website
                  </p>
                  <p className={classes.txt2}>
                    Donec metuse, vulputate at sapiens sit amet, auctor iaculis
                    lorem. In the hendrerit nisi.
                  </p>
                </div>
              </div>

              <div className={classes.rght_section}>
                <p className={classes.num1}>2</p>
                <div className={classes.inner_txt2}>
                  <p className={classes.txt1}>Friendly Relationship</p>
                  <p className={classes.txt2}>
                    Donec metuse, vulputate at sapiens sit amet, auctor iaculis
                    lorem. In the hendrerit nisi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.projects}>
          <p className={classes.title}>Projects</p>
          <div className={classes.project_card_wrapper}>
            <div className={classes.project_card}>
              <Image src={pizza} width={280} height={190} />
              <p className={classes.border_top}>Pizza Delivery: Chopar Pizza</p>
              <Link href="youtube.com">
                <p>Visit website ...</p>
              </Link>
            </div>

            <div className={classes.project_card}>
              <Image src={rock} width={280} height={190} />
              <p className={classes.border_top}>Rock,Paper,Scissors game</p>
              <Link href="youtube.com">
                <p>Visit website ...</p>
              </Link>
            </div>

            <div className={classes.project_card}>
              <Image src={skillet} width={280} height={190} />
              <p className={classes.border_top}>Skillet online shop</p>
              <Link href="youtube.com">
                <p>Visit website ...</p>
              </Link>
            </div>

            <div className={classes.project_card}>
              <Image src={bello} width={280} height={190} />
              <p className={classes.border_top}>Bello: new kind of life insurance</p>
              <Link href="youtube.com">
                <p>Visit website ...</p>
              </Link>
            </div>

            <div className={classes.project_card}>
              <Image src={pizza} width={280} height={190} />
              <p className={classes.border_top}>Pizza Delivery: Chopar Pizza</p>
              <Link href="youtube.com">
                <p>Visit website ...</p>
              </Link>
            </div>

            <div className={classes.project_card}>
              <Image src={pizza} width={280} height={190} />
              <p className={classes.border_top}>Pizza Delivery: Chopar Pizza</p>
              <Link href="youtube.com">
                <p>Visit website ...</p>
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.get_touch}>
          <Image src={desktop} width={320} height={340} />
          <div className={classes.txt_wrap}>
            <p className={classes.bold}>Have Any Project in Mind?</p>
            <p className={classes.bold}>Don’t Be Hesitate to Contact Us</p>
            <p className={classes.light}>
              Ready to make something creative? Let's get on a call.
            </p>
            <Link href="/contact" passHref>
            <button className={classes.touch_btn}>Get in touch</button>
            </Link>
          </div>
        </div>
        <Footer />
        <p className={classes.copyright}>
          Copyright © 2022 by Gulhayo Arabova. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
