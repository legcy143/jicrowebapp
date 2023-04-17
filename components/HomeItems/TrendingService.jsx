import React from 'react'
import style from "./service.module.scss"
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const TrendingService = () => {
  return (
    <main className={style.maincontainer}>
        <header className={style.tittle}>
        <h1><WhatshotIcon/> trending services</h1>
        </header>
        <section className={style.ServiceContainer}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </section>
    </main>
  )
}

export default TrendingService

const Card = ()=>{
    return(
<div className={style.serviceCard}>
    <img src="/servicebanner/Frame 2.png" alt="img" />
    <p>lorem ispum work is random text</p>
    <span>$ 255</span>
    <small>125 daily booking</small>
</div>
    )
}