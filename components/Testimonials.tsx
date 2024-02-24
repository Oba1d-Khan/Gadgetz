'use client'
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
    return (
        <>
            <section className='max-w-[85vw] lg:max-w-[50vw] mx-auto py-10'>
                <Swiper className=''
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}

                >
                    <SwiperSlide>
                        <div className="container flex items-center justify-center px-1 pt-24 pb-10 mx-auto text-gray-600 md:px-5 body-font ">

                            <div className="w-full mx-auto text-center lg:w-1/2 xl:w-2/3 ">
                                <Image
                                    src="/icons/quote.png"
                                    width={60}
                                    height={60}
                                    alt="quote-icon" className="inline-block object-contain mb-2 text-gray-400 w-18 h-18"

                                />
                                <p className="font-light leading-relaxed text-md md:text-lg lg:text-2xl">
                                    Absolutely thrilled with my purchase from Digital Dynamics! The sleek design and top-notch performance of the smartphone I bought exceeded my expectations. Couldn&apos;t be happier with the service and product quality. Highly recommended&quot;
                                </p>

                                {/* RATING  */}

                                <div className="flex items-center justify-center gap-1 mt-4 mb-2">
                                    <svg className="h-4 w-4 shrink-0 fill-[#72AEC8]" viewBox="0 0 256 256">
                                        <path
                                            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                        </path>
                                    </svg>
                                    <svg className="h-4 w-4 shrink-0 fill-[#72AEC8]" viewBox="0 0 256 256">
                                        <path
                                            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                        </path>
                                    </svg>
                                    <svg className="h-4 w-4 shrink-0 fill-[#72AEC8]" viewBox="0 0 256 256">
                                        <path
                                            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                        </path>
                                    </svg>
                                    <svg className="h-4 w-4 shrink-0 fill-[#72AEC8]" viewBox="0 0 256 256">
                                        <path
                                            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                        </path>
                                    </svg>
                                    <svg className="h-4 w-4 shrink-0 fill-[#72AEC8]" viewBox="0 0 256 256">
                                        <path
                                            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                        </path>
                                    </svg>
                                </div>

                                <h2 className="text-xs font-medium tracking-wider text-gray-900 uppercase title-font">
                                    Emily Watson                                </h2>
                            </div>


                        </div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="container flex items-center justify-center px-1 pt-24 pb-20 mx-auto text-gray-600 md:px-5 body-font ">

                            <div className="w-full mx-auto text-center lg:w-1/2 xl:w-2/3">
                                <Image
                                    src="/icons/quote.png"
                                    width={60}
                                    height={60}
                                    alt="quote-icon" className="inline-block object-contain mb-2 text-gray-400 w-18 h-18"

                                />
                                <p className="font-light leading-relaxed text-md md:text-lg lg:text-2xl">
                                    Gadgetz has truly revolutionized my tech experience. From browsing to checkout, the process was seamless. The tablet I ordered arrived promptly and works like a charm. Thanks for making tech shopping a breeze&quot;
                                </p>

                                {/* RATING  */}

                                <div className="flex items-center justify-center gap-1 mt-4 mb-2">
                                    <svg className="h-4 w-4 shrink-0 fill-[#72AEC8]" viewBox="0 0 256 256">
                                        <path
                                            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                        </path>
                                    </svg>
                                    <svg className="h-4 w-4 shrink-0 fill-[#72AEC8]" viewBox="0 0 256 256">
                                        <path
                                            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                        </path>
                                    </svg>
                                    <svg className="h-4 w-4 shrink-0 fill-[#72AEC8]" viewBox="0 0 256 256">
                                        <path
                                            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                        </path>
                                    </svg>
                                    <svg className="h-4 w-4 shrink-0 fill-[#72AEC8]" viewBox="0 0 256 256">
                                        <path
                                            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                        </path>
                                    </svg>
                                    <svg className="h-4 w-4 shrink-0 fill-[#72AEC8]" viewBox="0 0 256 256">
                                        <path
                                            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                        </path>
                                    </svg>
                                </div>

                                <h2 className="text-xs font-medium tracking-wider text-gray-900 uppercase title-font">
                                    Michael Johnson                                </h2>
                            </div>


                        </div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="container flex items-center justify-center px-1 pt-24 pb-20 mx-auto text-gray-600 md:px-5 body-font ">

                            <div className="w-full mx-auto text-center lg:w-1/2 xl:w-2/3">
                                <Image
                                    src="/icons/quote.png"
                                    width={60}
                                    height={60}
                                    alt="quote-icon" className="inline-block object-contain mb-2 text-gray-400 w-18 h-18"

                                />
                                <p className="font-light leading-relaxed text-md md:text-lg lg:text-2xl">
                                    I&apos;m blown away by the range of products offered by Gadgetz. The VR headset I bought has taken gaming to a whole new level for me. The customer service team was incredibly helpful throughout the entire purchasing journey. Kudos to Digital Dynamics!
                                </p>

                                {/* RATING  */}

                                <div className="flex items-center justify-center gap-1 mt-4 mb-2">
                                    <svg className="h-4 w-4 shrink-0 fill-[#72AEC8]" viewBox="0 0 256 256">
                                        <path
                                            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                        </path>
                                    </svg>
                                    <svg className="h-4 w-4 shrink-0 fill-[#72AEC8]" viewBox="0 0 256 256">
                                        <path
                                            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                        </path>
                                    </svg>
                                    <svg className="h-4 w-4 shrink-0 fill-[#72AEC8]" viewBox="0 0 256 256">
                                        <path
                                            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                        </path>
                                    </svg>
                                    <svg className="h-4 w-4 shrink-0 fill-[#72AEC8]" viewBox="0 0 256 256">
                                        <path
                                            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                        </path>
                                    </svg>
                                    <svg className="w-4 h-4 shrink-0 fill-gray-300" viewBox="0 0 256 256">
                                        <path
                                            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                        </path>
                                    </svg>
                                </div>

                                <h2 className="text-xs font-medium tracking-wider text-gray-900 uppercase title-font">
                                    Sarah Martinez                                </h2>
                            </div>


                        </div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="container flex items-center justify-center px-1 pt-24 pb-20 mx-auto text-gray-600 md:px-5 body-font ">

                            <div className="w-full mx-auto text-center lg:w-1/2 xl:w-2/3">
                                <Image
                                    src="/icons/quote.png"
                                    width={60}
                                    height={60}
                                    alt="quote-icon" className="inline-block object-contain mb-2 text-gray-400 w-18 h-18"

                                />
                                <p className="font-light leading-relaxed text-md md:text-lg lg:text-2xl">
                                    Gadgetz is my go-to destination for all things tech. The smartwatch I purchased not only looks stylish but also has amazing features that have helped me stay organized and motivated. Thank you for delivering excellence!
                                </p>

                                {/* RATING  */}

                                <div className="flex items-center justify-center gap-1 mt-4 mb-2">
                                    <svg className="h-4 w-4 shrink-0 fill-[#72AEC8]" viewBox="0 0 256 256">
                                        <path
                                            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                        </path>
                                    </svg>
                                    <svg className="h-4 w-4 shrink-0 fill-[#72AEC8]" viewBox="0 0 256 256">
                                        <path
                                            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                        </path>
                                    </svg>
                                    <svg className="h-4 w-4 shrink-0 fill-[#72AEC8]" viewBox="0 0 256 256">
                                        <path
                                            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                        </path>
                                    </svg>
                                    <svg className="h-4 w-4 shrink-0 fill-[#72AEC8]" viewBox="0 0 256 256">
                                        <path
                                            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                        </path>
                                    </svg>
                                    <svg className="w-4 h-4 shrink-0 fill-gray-300" viewBox="0 0 256 256">
                                        <path
                                            d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                        </path>
                                    </svg>
                                </div>

                                <h2 className="text-xs font-medium tracking-wider text-gray-900 uppercase title-font">
                                    David Thompson
                                </h2>
                            </div>


                        </div>

                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    );
};

export default Testimonials;
