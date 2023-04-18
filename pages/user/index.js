import Image from 'next/image'
import Homenav from '@/components/navbar/Homenav'
import Crausal from '@/components/HomeItems/Crausal'
import ServiceList from '@/components/HomeItems/ServiceList'
import TrendingService from '@/components/HomeItems/TrendingService'
import Recomendataion from '@/components/HomeItems/Recomendataion'


export default function Home() {
  return (
    <main>
      <Homenav/>
      <section className='primarylayout' style={{margin:"2rem auto"}}>
      <Crausal/>
      <ServiceList />
      <TrendingService/>
      <Recomendataion />
      </section>
    </main>
  )
}
