import React from 'react'
import style from "./homenav.module.scss"
import SearchIcon from '@mui/icons-material/Search';

const Homenav = () => {
  return (
    <main className={style.navMain}>
        <nav className={style.nav}>
            <div className={style.location}>
                <h1>madhya pardesh</h1>
                <p>ayodhya byapass , bhopal</p>
            </div>
            <div className={style.searchbox}>
                <input type="text" placeholder='search ..'/>
                <SearchIcon />
            </div>
        </nav>
    </main>
  )
}

export default Homenav