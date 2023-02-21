import React from 'react'
import classes from "./Footer.module.scss"
import logo from "../../assets/images/Logo.png"
import face from "../../assets/icons/face.png"
import linkedin from "../../assets/icons/Linkedin.png"
import telegram from "../../assets/icons/telegram-24.png"
import twitter from "../../assets/icons/twitter.png"
import Link from "next/link"
import Image from "next/image";

const Footer = () => {
    return (
        <div className={classes.footer_wrapper}>
            <div className={classes.inner_wrap}>
            <Image src={logo} />
            <p className={classes.lrg_txt}>Lets Talk with Me!</p>
            <p className={classes.sml_txt}>I am always open to discuss your project, improve your online presence or help with your UX/UI design</p>
            <div className={classes.icon_wrap}>
                <div>
                <Link href="https://www.facebook.com/profile.php?id=100077345967018">
                    <a>
                    <Image src={ face} /></a>
                </Link>
                </div>
                <div>
                 <Link href="https://twitter.com/Gulhayo04">
                 <a>
                    <Image src={twitter } />
                    </a>
                </Link>
                </div>
                <div>
                 <Link href="https://t.me/gulhay0">
                    <a>
                    <Image src={telegram } /></a>
                </Link>
                </div>
                <div>
                 <Link href="https://www.linkedin.com/in/gulhayo-arabova-b865a3210/">
                    <a>
                    <Image src={linkedin } /></a>
                </Link>
                </div>
            </div>
            </div>
            <div className={classes.inner2_wrap}>
                <ul>
                    <li>Start</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>News</li>
                    <Link href="/contact" passHref>
                    <li>Contact</li>
                    </Link>
                </ul>
                <Link href="gulhayoarabova@gmail.com" passHref>
                    <a>
                <p className={classes.email}>gulhayoarabova@gmail.com</p></a>
                </Link>
            </div>

        </div>
    )
}

export default Footer