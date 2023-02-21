import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "../assets/styles/Contact.module.scss";
import img1 from "../assets/images/Illustrations.png";

const Contact = () => {
  return (
    <div className={classes.contact_bg}>
      <div className={classes.contact_main_section}>
        <form>
          <p className={classes.big_txt}>Contact me</p>
          <div className={classes.input_wrapper}>
            <div className={classes.name_Wrap}>
              <div className={classes.name}>
                <label>Firstname</label>
                <input type="text" placeholder="Firstname" />
              </div>
              <div className={classes.surname}>
                <label>Lastname</label>
                <input type="text" placeholder="Surname" />
              </div>
            </div>
            <div className={classes.txtarea}>
              <label>Message me: </label>
              <textarea
                name="txtarea"
                cols="30"
                rows="10"
                placeholder="Leave some message"
              />
            </div>
            <button type="submit" className={classes.submit_btn}>Send</button>
          </div>
        </form>
        <div className={classes.img_wrap}>
          <Image src={img1} alt="" width={480} height={400}/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
