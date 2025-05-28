import TesNavbar from '@/components/navbar/tesNav'
import StandardSlider from '@/components/roomslider/standardSlider'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList } from '@/components/ui/tabs'
import { TabsTrigger } from '@radix-ui/react-tabs'
import Image from 'next/image'
import React from 'react'

export default function Room() {
  return (
    <main>
      <section
        className="bg-[url('/homeBg.png')] bg-cover bg-center min-h-screen">
        <TesNavbar />
      </section>
      {/* rooms */}
      <section className='padx py-16 '>
        <div>
          <Tabs defaultValue='standard' className='w-full'>
            {/* tabslistmobile */}
            <TabsList className="grid grid-cols-3 bg-white rounded-lg shadow-md  mb-4 font-bold w-full lg:hidden">
              <TabsTrigger value="standard" className="data-[state=active]:text-primary">Standard </TabsTrigger>
              <TabsTrigger value="deluxe" className="data-[state=active]:text-primary">Deluxe </TabsTrigger>
              <TabsTrigger value="family" className="data-[state=active]:text-primary">Family </TabsTrigger>
            </TabsList>
            {/* tabslistdesktop */}
            <TabsList className=" grid-cols-3 bg-white rounded-lg shadow-md px-4 gap-4 mb-4 font-bold hidden lg:flex">
              <TabsTrigger value="standard" className="data-[state=active]:text-primary">Standard Rooms</TabsTrigger>
              <TabsTrigger value="deluxe" className="data-[state=active]:text-primary">Deluxe Rooms</TabsTrigger>
              <TabsTrigger value="family" className="data-[state=active]:text-primary">Family Rooms</TabsTrigger>
            </TabsList>
            {/* Standard Room content  */}
            <TabsContent value="standard">
              <section>
              <div className="flex flex-col md:flex-row bg-white lg:gap-4 rounded-xl shadow-md overflow-hidden">
                {/* Image */}
                <div className="md:w-1/2">
                  <Image
                    src="/RoomImg.png" 
                    alt="Standard Room"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold lg:text-xl text-primary mb-1">
                      Standard Room
                    </h3>
                    <p className="text-lg font-semibold text-black">Rs 1200 <span className="text-sm text-gray-600">/NIGHT</span></p>
                    <p className="text-sm text-gray-700 mt-2">
                      Comfortable room with traditional Tamang décor, offering mountain views and modern amenities.
                    </p>

                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Room Features</h4>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Private bathroom</li>
                        <li>Free Wi-Fi</li>
                        <li>Scenic views</li>
                        <li>Fresh linens</li>
                        <li>Free parking</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button>
                      BOOK NOW
                    </Button>
                  </div>
                </div>
              </div>
              </section>
              <section className='py-16'>
                {/* room show slider */}
                <StandardSlider />
              </section>
            </TabsContent>
            {/* Deluxe Room content  */}
            <TabsContent value="deluxe">
              <section>
              <div className="flex flex-col md:flex-row bg-white lg:gap-4 rounded-xl shadow-md overflow-hidden">
                {/* Image */}
                <div className="md:w-1/2">
                  <Image
                    src="/RoomImg.png" 
                    alt="Standard Room"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold lg:text-xl text-primary mb-1">
                      Deluxe Room
                    </h3>
                    <p className="text-lg font-semibold text-black">Rs 1500 <span className="text-sm text-gray-600">/NIGHT</span></p>
                    <p className="text-sm text-gray-700 mt-2">
                      Comfortable room with traditional Tamang décor, offering mountain views and modern amenities.
                    </p>

                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Room Features</h4>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Private bathroom</li>
                        <li>Free Wi-Fi</li>
                        <li>Scenic views</li>
                        <li>Fresh linens</li>
                        <li>Free parking</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button>
                      BOOK NOW
                    </Button>
                  </div>
                </div>
              </div>
              </section>
              <section className='py-16'>
                {/* room show slider */}
                <StandardSlider />
              </section>
            </TabsContent>
            {/* Family Room content  */}
            <TabsContent value="family">
              <section>
              <div className="flex flex-col md:flex-row bg-white lg:gap-4 rounded-xl shadow-md overflow-hidden">
                {/* Image */}
                <div className="md:w-1/2">
                  <Image
                    src="/RoomImg.png" 
                    alt="Standard Room"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold lg:text-xl text-primary mb-1">
                      Family Room
                    </h3>
                    <p className="text-lg font-semibold text-black">Rs 1800 <span className="text-sm text-gray-600">/NIGHT</span></p>
                    <p className="text-sm text-gray-700 mt-2">
                      Comfortable room with traditional Tamang décor, offering mountain views and modern amenities.
                    </p>

                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Room Features</h4>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        <li>Private bathroom</li>
                        <li>Free Wi-Fi</li>
                        <li>Scenic views</li>
                        <li>Fresh linens</li>
                        <li>Free parking</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button>
                      BOOK NOW
                    </Button>
                  </div>
                </div>
              </div>
              </section>
              <section className='py-16'>
                {/* room show slider */}
                <StandardSlider />
              </section>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main >
  )
}
