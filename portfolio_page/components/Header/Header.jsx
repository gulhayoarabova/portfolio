import  Link  from "next/link";
import Image from "next/image";
import logotip from "../../assets/images/Logo.png";
import classes from "../../assets/styles/Header.module.scss";
const Header = () => {
  return (
    <div className={classes.header_wrapper}>
      <div className={classes.img_section}>
        <Image src={logotip} />
      </div>

      <ul className={classes.ul_section}>
        <li>Blog</li>
        <li>Resume</li>
        <li>Portfolio</li>
        <li>News</li>
        <li>
        Contact
        </li>
      </ul>
      <div className={classes.btn_section}>
        <button>
         <a href="tel:+998 97 001 45 52">Call me! </a> 
         </button>
      </div>
    </div>
  );
};

export default Header;
