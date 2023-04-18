import Image from 'next/image'
import Link from 'next/link'
import style from "./styles/home.module.scss"
import { useRouter } from 'next/router'
import URL from "@/constants/URL"


export default function Home() {
  let router = useRouter();
  return (
    <main className={style.mainAuth}>
      <section className={style.authContainer}>
        <header className={style.header}>
        <h1>welcome</h1>
        <p>how is your day</p>
        </header>
        <div className={style.linehr}>
    <div />login or signup<div />
  </div>
        <button className={style.costumerLoginBtn} onClick={()=>{router.push(URL.USERHOME)}}>continue with whatsapp</button>
        <div className={style.linehr}>
    <div />*<div />
  </div>
  <button className={style.workerLoginBtn} onClick={()=>{router.push(URL.SERVICEPROVIDERHOME)}}>continue with whatsapp</button>
  <div className={style.terms}>
    <span>by continue as user you are agreeing our</span>
    <small>Terms and condition</small>
  </div>
      </section>
      {/* <h1>login auth</h1>
      <Link href="/user">user</Link> */}
    </main>
  )
}