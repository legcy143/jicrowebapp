import React from 'react'
import style from "./servicelist.module.scss"
import AddIcon from '@mui/icons-material/Add';


const ServiceList = () => {
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
      <div className={`${style.card} ${style.postService}`}>
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
