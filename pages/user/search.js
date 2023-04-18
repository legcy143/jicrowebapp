import React from 'react'
import style from "./styles/search.module.scss"
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRouter } from 'next/router';

const Search = () => {
  let router = useRouter()
  return (
    <main>
        <nav className={style.searchNav}>
        <button className={style.backbtn} onClick={()=>{router.back(-1)}}><ArrowBackIosIcon/></button>
        <div className={style.searchbox} > 
                <input type="text" placeholder='search ..' />
                <SearchIcon />
            </div>
        </nav>
    </main>
  )
}

export default Search