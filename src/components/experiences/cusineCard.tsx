import { ExpCardData } from '@/lib/const'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function CusineCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
                {ExpCardData.map((exp, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden"
                    >
                        <Image
                            src={exp.image}
                            alt={exp.title}
                            width={600}
                            height={320}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-extrabold text-primary mb-2">{exp.title}</h3>
                            <p className="text-sm text-muted-foreground">{exp.description}</p>
                        </div>
                        <div>
                            <Link href='/contact'>
                            <Button className="w-full py-8 font-bold text-lg">
                                Book this Experience
                            </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
  )
}
