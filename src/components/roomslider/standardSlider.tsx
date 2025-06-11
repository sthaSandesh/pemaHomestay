'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import Image from 'next/image'

const images = [
  '/Sroom6.webp',
  '/Sroom2.webp',
  '/Sroom3.webp',
  '/Sroom5.webp',
  '/Sroom4.webp',
  '/Sroom1.webp',
]

export default function StandardSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    // <div className="w-full ">
    //   {/* Main Gallery */}
    //   <Swiper
    //     spaceBetween={10}
    //     navigation
    //     loop={true}
    //     thumbs={{ swiper: thumbsSwiper }}
    //     modules={[Navigation, Thumbs]}
    //     className="rounded-xl overflow-hidden "
    //   >
    //     {images.map((src, index) => (
    //       <SwiperSlide key={index}>
    //         <Image
    //           src={src}
    //           alt={`Room ${index + 1}`}
    //           width={1200}
    //           height={800}
    //           className="w-full h-[400px] object-cover"
    //         />
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>

    //   {/* Thumbnail Gallery */}
    //   <Swiper
    //     onSwiper={setThumbsSwiper}
    //     spaceBetween={10}
    //     slidesPerView={5}
    //     loop={true}
    //     watchSlidesProgress
    //     modules={[Thumbs]}
    //     className="mt-4"
    //   >
    //     {images.map((src, index) => (
    //       <SwiperSlide key={index}>
    //         <Image
    //           src={src}
    //           alt={`Thumbnail ${index + 1}`}
    //           width={200}
    //           height={200}
    //           className="w-full lg:h-24 object-cover rounded-md border "
    //         />
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>
<div className="w-full ">
      {/* Main Image Swiper */}
      <Swiper
        spaceBetween={10}
        // navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="rounded-xl overflow-hidden"
      >
        {images.map((src, index) => (
          <SwiperSlide 
          key={index}
          className="cursor-grab" 
          >
            <Image
              src={src}
              alt={`Room ${index + 1}`}
              width={1200}
              height={800}
              className="w-full h-[400px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        watchSlidesProgress
        modules={[Thumbs]}
        className="mt-4"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="relative group cursor-grab">
            <Image
              src={src}
              alt={`Thumbnail ${index + 1}`}
              width={200}
              height={200}
              className="w-full h-full lg:h-24 object-cover rounded-md border"
            />
            {/* Overlay on non-active thumbnails */}
            {activeIndex !== index && (
              <div className="absolute inset-0 bg-black/40 rounded-md pointer-events-none transition-opacity duration-300" />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
