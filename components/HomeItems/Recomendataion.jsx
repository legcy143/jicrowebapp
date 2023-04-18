import React from 'react'
import style from "./service.module.scss"
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const Recomendataion = () => {
    return (
        <main className={style.maincontainer}>
            <header className={style.tittle}>
            <h1><DoubleArrowIcon/> Recomendation</h1>
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

export default Recomendataion

const Card = ()=>{
    return(
<div className={style.recomandationCard}>
    <img src="/servicebanner/Frame 2.png" alt="img" />
    <h1>recomendation service </h1>
    <div className={style.infoContainer}>
    <img src="/servicebanner/Frame 2.png" alt="img" />
    <p>342</p>
    <p>342</p>
    <p>342</p>
    </div>
    <button>book service</button>
</div>
    )
}