import TesNavbar from '@/components/navbar/tesNav'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
    return (
        <section
            className="bg-[url('/404bg-webp')] bg-cover bg-center min-h-[140vw] sm:min-h-screen relative">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="relative z-10">
                <TesNavbar />
            </div>
            {/* Hero Content */}
            <div className="absolute left-4 bottom-4 p-8 text-white lg:max-w-[50%] z-20 hidden lg:flex flex-col justify-center">
                <h2 className="text-5xl text-primary font-bold mb-2">Lost in the Hills?</h2>
                <h3 className="text-xl font-semibold mb-4">Oops! This trail doesn&apos;t lead anywhere.</h3>
                <Link href="/" className="mt-4">
                <Button>Return Home</Button>
                </Link>
            </div>
        </section>
    )
}
