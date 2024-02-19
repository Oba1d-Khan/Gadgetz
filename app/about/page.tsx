import { Button, Features, Testimonials } from "@/components/index";
import Image from "next/image";
import React from "react";

const page = () => {
    return (
        <>
            <main>
                <header className="bg-[#EDF1F3] w-screen mx-auto ">
                    <div className="flex flex-col items-center justify-center py-10 ">
                        <h1 className="md:w-[35vw] font-light uppercase text-center text-5xl  ">
                            About Us
                        </h1>
                        <p>breadcrumb</p>
                    </div>
                </header>

                <Features />

                <section className="max-w-[85vw] md:max-w-[70vw] mx-auto py-4 md:grid md:grid-cols-2 ">
                    <div className="">
                        <Image
                            className="w-full md:max-w-[30vw]"
                            src="/images/about-video.png"
                            width={500}
                            height={500}
                            quality={100}
                            alt="about-img"
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4 py-4 md:items-start   ">
                        <h3 className="uppercase text-[#272727] text-xl ">How was Ministore Found?</h3>
                        <p className="text-[#3A3A3A] text-sm">
                            Risus augue curabitur diam senectus congue velit et. Sed vitae
                            metus nibh sit era. Nulla adipiscing pharetra pellentesque
                            maecenas odio eros at. Et libero vulputate amet duis erat volutpat
                            vitae eget. Sed vitae metus nibh sit era. Nulla adipiscing
                            pharetra pellentesque maecenas odio eros at. Quam libero etiam et
                            in ac at quis. <br />
                            Sed vitae metus nibh sit era. Nulla adipiscing
                            pharetra pellentesque maecenas odio eros at. Et libero vulputate
                            amet duis erat volutpat vitae eget. Quam libero etiam et in ac at
                            quis. Risus augue curabitur diam senectus congue velit et.
                        </p>
                        <Button
                            type="button"
                            title="Shop our store"
                            variant="bg-[#272727]"
                        />
                    </div>
                </section>

                <Testimonials />
            </main >
        </>
    );
};

export default page;
