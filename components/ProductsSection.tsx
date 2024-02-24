import Image from "next/image";
import Link from "next/link";

const ProductsSection = ({ sectionTitle }: { sectionTitle: string }) => {
    return (
        <>
            <div className="max-w-[80vw] mx-auto py-10">
                <div className="flex items-center justify-between py-6 tracking-wide ">
                    <h1 className="text-lg font-medium uppercase">{sectionTitle}</h1>
                    <Link href="#" className="text-sm uppercase border-b-2 border-gray-300">
                        Go To Shop
                    </Link>
                </div>

                {/* ---------------------------------------- */}
                <section className="grid grid-cols-2 gap-3 justify-items-center md:grid-cols-4 md:gap-4">

                    {/* 1  */}

                    <div className=" md:max-w-[16vw]">
                        <Link
                            className="flex flex-col overflow-hidden transition bg-white group "
                            href="#"
                        >
                            <div className="overflow-hidden">
                                <Image
                                    className="w-full h-full transition-transform duration-500 ease-in-out md:object-contain group-hover:scale-105 "
                                    src="/images/iphone-10.png"
                                    alt="product image"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="flex items-center justify-between p-1 ">
                                <h3 className="text-sm uppercase ">Iphone 10</h3>
                                <p className="text-[#72AEC8] text-sm">$980</p>
                            </div>
                        </Link>
                    </div>

                    {/* 2  */}


                    <div className=" md:max-w-[16vw] ">
                        <Link
                            className="flex flex-col overflow-hidden transition bg-white group "
                            href="#"
                        >
                            <div className="overflow-hidden ">
                                <Image
                                    className="object-contain w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105 "
                                    src="/images/iphone-11.png"
                                    alt="product image"
                                    width={240}
                                    height={240}
                                />
                            </div>
                            <div className="flex items-center justify-between p-1">
                                <h3 className="text-sm uppercase ">Iphone 11</h3>
                                <p className="text-[#72AEC8] text-sm">$1100</p>
                            </div>
                        </Link>
                    </div>


                    {/* 3  */}

                    <div className=" md:max-w-[16vw] ">
                        <Link
                            className="flex flex-col overflow-hidden transition bg-white group "
                            href="#"
                        >
                            <div className="overflow-hidden ">
                                <Image
                                    className="object-contain w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105 "
                                    src="/images/iphone-8.png"
                                    alt="product image"
                                    width={240}
                                    height={240}
                                />
                            </div>
                            <div className="flex items-center justify-between p-1">
                                <h3 className="text-lg uppercase md:text-sm">Iphone 8</h3>
                                <p className="text-[#72AEC8] md:text-sm">$780</p>
                            </div>
                        </Link>
                    </div>

                    {/* 4  */}

                    <div className=" md:max-w-[16vw] ">
                        <Link
                            className="flex flex-col overflow-hidden transition bg-white group "
                            href="#"
                        >
                            <div className="overflow-hidden ">
                                <Image
                                    className="object-contain w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105 "
                                    src="/images/iphone-13.png"
                                    alt="product image"
                                    width={240}
                                    height={240}
                                />
                            </div>
                            <div className="flex items-center justify-between p-1">
                                <h3 className="text-lg uppercase md:text-sm">Iphone 13</h3>
                                <p className="text-[#72AEC8] md:text-sm">$1500</p>
                            </div>
                        </Link>
                    </div>




                </section>
            </div>
        </>
    );
};

export default ProductsSection;
