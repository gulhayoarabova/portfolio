import React from 'react'
import Image from "next/image";
import logo from "../../assets/images/Logo.png"
import classes from "../../assets/styles/Header.module.scss"

const Header = () => {
  return (
    <div className={classes.header_wrapper}>
        <div className={classes.img_section}>
            <Image src={logo}/>
        </div>
        
<ul className={classes.ul_section}>
<li>Start</li>
<li>Services</li>
<li>Portfolio</li>
<li>News</li>
<li>Contact</li>
</ul>
<div className={classes.btn_section}>
    <button>
    Book a call
</button>
</div>

   </div>
  )
}

export default Header