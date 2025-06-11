import ExpCard from '@/components/experiences/expCard'
import TesNavbar from '@/components/navbar/tesNav'
import React from 'react'

export default function Experiences() {
  return (
    <main>
      <section
        className="bg-[url('/experiencesBG.webp')] bg-cover bg-center min-h-[140vw] sm:min-h-screen relative">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-10">
          <TesNavbar />
        </div>
        {/* Hero Content */}
        <div className="absolute left-4 bottom-4 p-8 text-white lg:max-w-[50%] z-20 hidden lg:flex flex-col justify-center">
          <h2 className="text-5xl font-bold mb-2">Experiences</h2>
          <h3 className="text-xl font-semibold mb-4">An experience where heritage whispers through every moment in the warmth of rural Nepal.</h3>
          <p className="text-sm md:text-base">

          </p>
        </div>
      </section>
      <section className='padx py-16'>
        <div className="text-center">
          <h2 className="font-bold text-3xl text-primary mb-2">Cultural Experiences</h2>
          <p className="text-muted-foreground font-semibold">
            Taste the richness of home-cooked meals prepared with fresh farm ingredients. </p>
        </div>
        <div className="flex justify-center my-8">
          <svg width="155" height="6" viewBox="0 0 155 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="155" height="6" rx="3" fill="#F19204" />
          </svg>
        </div>
        <ExpCard />
      </section>
    </main>
  )
}
