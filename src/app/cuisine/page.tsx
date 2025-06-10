import CusineCard from '@/components/experiences/cusineCard'
import TesNavbar from '@/components/navbar/tesNav'
import React from 'react'

export default function Cuisine() {
  return (
    <main>
      <section
        className="bg-[url('/homeBg.png')] bg-cover bg-center min-h-screen ">
        {/* min-h-[calc(100vh-90px)] */}
        <TesNavbar />
      </section>
      <section className='padx py-16'>
        <div className="text-center">
          <h2 className="font-bold text-3xl text-primary mb-2">Local Cuisine</h2>
          <p className="text-muted-foreground font-semibold">
            Explore authentic culture, nature, and adventure in the serene hills of Madan Kundari. </p>
        </div>
        <div className="flex justify-center my-8">
          <svg width="155" height="6" viewBox="0 0 155 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="155" height="6" rx="3" fill="#F19204" />
          </svg>
        </div>
        <div>
          <CusineCard />
        </div>
      </section>
    </main>
  )
}
