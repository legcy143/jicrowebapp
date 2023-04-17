import React from 'react'
import style from "./trendingservice.module.scss"
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const TrendingService = () => {
  return (
    <main className={style.maincontainer}>
        <h1 className={style.tittle}><WhatshotIcon/> trending services</h1>
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
    <img src="/servicebanner/frame 2.png" alt="img" />
    <p>lorem ispum work is random text</p>
    <span>$ 255</span>
    <small>125 daily booking</small>
</div>
    )
}