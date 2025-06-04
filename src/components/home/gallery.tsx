import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import Image from 'next/image'
import { GalleryImages } from '@/lib/const'

export default function Gallery() {
    return (
        <Tabs defaultValue="all" >
            <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="rooms">Rooms</TabsTrigger>
                <TabsTrigger value="cuisine">Cuisine</TabsTrigger>
                <TabsTrigger value="culture">Culture</TabsTrigger>
                <TabsTrigger value="nature">Nature</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className='py-4 pt-8'>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {GalleryImages[0]?.map((img, idx) => (
                        <div
                            key={idx}
                            className="overflow-hidden aspect-square"
                        >
                            <Image
                                src={GalleryImages[0][idx].src}
                                alt={`Gallery image ${idx + 1}`}
                                width={500}
                                height={500}
                                className="object-fill rounded-lg w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="rooms" className='py-4 pt-8'>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {GalleryImages[1]?.map((img, idx) => (
                        <div
                            key={idx}
                            className="overflow-hidden aspect-square"
                        >
                            <Image
                                src={GalleryImages[1][idx].src}
                                alt={`Gallery image ${idx + 1}`}
                                width={500}
                                height={500}
                                className="object-fill rounded-lg w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="cuisine" className='py-4 pt-8'>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {GalleryImages[2]?.map((img, idx) => (
                        <div
                            key={idx}
                            className="overflow-hidden aspect-square"
                        >
                            <Image
                                src={GalleryImages[2][idx].src}
                                alt={`Gallery image ${idx + 1}`}
                                width={500}
                                height={500}
                                className="object-fill rounded-lg w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="culture" className='py-4 pt-8'>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {GalleryImages[3]?.map((img, idx) => (
                        <div
                            key={idx}
                            className="overflow-hidden aspect-square"
                        >
                            <Image
                                src={GalleryImages[3][idx].src}
                                alt={`Gallery image ${idx + 1}`}
                                width={500}
                                height={500}
                                className="object-fill rounded-lg w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="nature" className='py-4 pt-8'>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {GalleryImages[4]?.map((img, idx) => (
                        <div
                            key={idx}
                            className="overflow-hidden aspect-square"
                        >
                            <Image
                                src={GalleryImages[4][idx].src}
                                alt={`Gallery image ${idx + 1}`}
                                width={500}
                                height={500}
                                className="object-fill rounded-lg w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </TabsContent>
        </Tabs>
    )
}
