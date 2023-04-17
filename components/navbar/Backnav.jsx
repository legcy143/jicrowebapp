import React from 'react'
import style from "./Backnav.module.scss"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRouter } from 'next/router';

const Backnav = (props) => {
  let router = useRouter();
  return (
    <main className={style.navMain}>
        <button onClick={()=>{router.back(-1)}}><ArrowBackIosIcon/> back</button>
        <h2>{props.page}</h2>
        <h1>jicro</h1>
    </main>
  )
}

export default Backnav