import ExpCard from '@/components/experiences/expCard'
import TesNavbar from '@/components/navbar/tesNav'
import React from 'react'

export default function Experiences() {
  return (
   <main>
    <section
            className="bg-[url('/homeBg.png')] bg-cover bg-center min-h-screen">
            <TesNavbar />
          </section>
          <section className='padx py-16'>
            <ExpCard />
          </section>
   </main>
  )
}
