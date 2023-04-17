import React from 'react'
import URL from "../../constants/URL"
import Backnav from '@/components/navbar/Backnav'
import style from "./styles/demandService.module.scss"

const Demandservice = () => {
    console.log("urls => " , URL)
  return (
    <main className={style.mainContainer}>
        <Backnav/>
        <section className={style.formContainer}>
            <h1>demand service</h1>
            <p>Short title</p>
            <input type="text" placeholder='demand service'/>
            <p>description</p>
            <textarea placeholder='i need a wroker for 2 hour'></textarea>
            <p>money to be paid</p>
            <input type="text" placeholder='$240'/>
            <p>date and time</p>
            <input type="datetime-local" name="" id="" />
            <button>post service</button>
        </section>
    </main>
  )
}

export default Demandservice