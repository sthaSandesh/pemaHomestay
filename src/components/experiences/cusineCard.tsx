import { CusineCardData } from '@/lib/const' // <-- use CusineCardData
import Image from 'next/image'
import React from 'react'

export default function CusineCard() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
            {CusineCardData.map((exp, idx) => ( // <-- use CusineCardData here
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
                    <div className="px-6 pt-4">
                        <h3 className="text-xl font-extrabold text-primary mb-2">{exp.title}</h3>
                        <p className="text-sm text-muted-foreground">{exp.description}</p>
                        </div>
                        <div className='px-6 my-4'>
                            <h3 className='font-semibold text-lg pt-2 text-muted-foreground'>Key Ingredients</h3>
                            <div className="flex flex-wrap gap-2 my-1">
                                {exp.keyIng && exp.keyIng.map((ingredient: string, i: number) => (
                                    <span
                                        key={i}
                                        className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold"
                                    >
                                        {ingredient}
                                    </span>
                                ))}
                            </div>
                    </div>
                </div>
            ))}
        </div>
    )
}