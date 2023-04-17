import React from 'react'
import style from "./servicelist.module.scss"
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/router';
import URL from '@/constants/URL';


const ServiceList = () => {
  let router = useRouter()
  return (
    <main className={style.container}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <div className={`${style.card} ${style.postService}`} onClick={()=>{router.push(URL.DEMANDSERVICE)}}>
        <AddIcon/>
       <span>demand service</span>
  </div>
    </main>
  )
}

export default ServiceList



const Card = () => {
  return (
    <div className={style.card}>
    <img src="/serviceimg/appliance repair.png" alt="img" />
    <span>carpenter</span>
  </div>
  )
}
