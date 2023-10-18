import classes from "./Footer.module.scss"
import logo from "../../assets/images/Logo.png"
import telegram from "../../assets/icons/telegram-24.png"
import instagram from "../../assets/icons/instagram.png"
import Link from "next/link"
import Image from "next/image";

const Footer = () => {
    return (
        <div className={classes.footer_wrapper}>
            <div className={classes.inner_wrap}>
            <Image src={logo} />
            <p className={classes.lrg_txt}>Lets Talk with Me!</p>
            <p className={classes.sml_txt}>I am always open to discuss your project and improve it!</p>
            <div className={classes.icon_wrap}>
                {/* <div>
                <Link href="https://www.facebook.com/profile.php?id=100072974767768&mibextid=ZbWKwL">
                    <a>
                    <Image src={ face} /></a>
                </Link>
                </div> */}
                {/* <div>
                 <Link href="https://twitter.com/Gulhayo04">
                 <a>
                    <Image src={twitter } />
                    </a>
                </Link>
                </div> */}
                <div>
                 <Link href="https://t.me/@sevinch_gbs7">
                    <a>
                    <Image src={telegram } /></a>
                </Link>
                </div>
                <div>
                 <Link href="https://www.instagram.com/sevinch_gbs7/">
                    <a>
                    <Image src={instagram} /></a>
                </Link>
                </div>
            </div>
            </div>
            <div className={classes.inner2_wrap}>
                <ul>
                    <li>Start</li>
                    <li>Resume</li>
                    <li>Portfolio</li>
                    <li>News</li>
                    <Link href="/contact" passHref>
                    <li>Contact</li>
                    </Link>
                </ul>
                <Link href="sevinchmavlonova11@gmail.com" passHref>
                    <a>
                <p className={classes.email}>sevinchmavlonova11@gmail.com</p></a>
                </Link>
            </div>

        </div>
    )
}

export default Footer