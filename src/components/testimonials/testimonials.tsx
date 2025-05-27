'use client';

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import { testimonials } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonial() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-12">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <Card className="rounded-xl shadow-lg overflow-hidden py-0 my-8 h-[420px] flex flex-col justify-between">
                            <div className="bg-red-600 relative h-20 pb-20">
                                <svg width="411" height="181" viewBox="0 0 411 181" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_632_3)">
                                        <path d="M224 159C299.722 169.033 410 98.5 410 98.5L455.5 -25.5L224 -39.5H-29.5L-38 132C-38 132 -8.94646 173.187 19.5 180C64.6708 190.818 74.6566 121.118 121 118C164.196 115.093 181.081 153.313 224 159Z" fill="url(#paint0_linear_632_3)" />
                                        <path d="M64.2912 54.8005C6.43289 42.5909 -64.0108 -25.6118 -64.0108 -25.6118L-64.7097 -30.6026L-62.9185 -134.889L424.883 -192.464L503.28 -48.5217C503.28 -48.5217 443.764 20.8816 390.924 33.3671C336.749 46.1681 306.258 8.21937 250.591 8.35375C175.61 8.53477 137.657 70.2825 64.2912 54.8005Z" fill="url(#paint1_linear_632_3)" />
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_632_3" x1="208.75" y1="181.139" x2="208.75" y2="-39.5" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#BF1523" />
                                            <stop offset="0.62" stop-color="#BF1523" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_632_3" x1="201.816" y1="-166.312" x2="232.666" y2="55.9762" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#F19204" stop-opacity="0.4" />
                                            <stop offset="1" stop-color="#F10404" stop-opacity="0.37" />
                                        </linearGradient>
                                        <clipPath id="clip0_632_3">
                                            <rect width="411" height="181" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={48}
                                        height={48}
                                        className="rounded-full border-2 border-white"
                                    />
                                </div>
                            </div>
                            <CardContent className="pt-10 pb-6 px-4 text-center space-y-4">
                                <p className="text-sm text-gray-700">{testimonial.message}</p>
                                <p className="text-sm font-medium text-primary">
                                    — {testimonial.name}, {testimonial.location}
                                </p>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
