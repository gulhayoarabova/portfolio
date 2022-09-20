import React from "react"
import Header from "../components/Header/Header"
import classes from "../assets/styles/Home.module.scss"
// import "../assets/styles/globals.css"
export default function Home() {
  return (
    <div className={classes.home_wrapper}>
    <div className={classes.container}>
   <Header/>
    </div>
    </div>
  )
}
