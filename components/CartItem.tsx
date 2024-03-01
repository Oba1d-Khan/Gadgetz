import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { FaPlus, FaMinus, FaX } from "react-icons/fa6";

const CartItem = () => {
    return (
        <>
            <div className=" flex flex-col gap-6 border-b border-gray-400 pb-6">

                <div className="grid grid-cols-[30vw_20vw_20vw] md:grid-cols-[40vw_20vw_20vw] items-center justify-around md:justify-between">

                    <div className="flex overflow-hidden ">
                        <Image
                            className="max-w-[10vw]  md:object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out "
                            src="/images/iphone-10.png"
                            alt="product image"
                            width={500}
                            height={500}
                        />
                        <div className="flex flex-col justify-center ml-4  ">
                            <h3 className="text-sm uppercase ">Iphone 10</h3>
                            <p className="text-[#72AEC8] text-sm">$980</p>
                        </div>

                    </div>

                    <div className="flex text-center items-center  gap-2 ">
                        <button className="px-2   lg:px-4 lg:py-2 shadow-lg ">-</button>
                        <div className="w-16 lg:w-20 lg:py-2  shadow-lg ">1</div>
                        <button className="px-2  lg:px-4 lg:py-2   shadow-lg ">+</button>
                    </div>

                    <div className="flex gap-2 lg:gap-16 text-center items-center">
                        <h5 className="text-[#72AEC8] text-xl lg:text-3xl">$980.00</h5>
                        <Image
                            className="w-6"
                            src="/icons/close-icon.png"
                            width={40}
                            height={40}
                            alt="remove-icon"
                        />
                    </div>

                </div>



                {/* <div className="grid grid-cols-[30vw_20vw_20vw] md:grid-cols-[40vw_20vw_20vw] items-center justify-around md:justify-between">

                    <div className="flex overflow-hidden ">
                        <Image
                            className="max-w-[10vw]  md:object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out "
                            src="/images/iphone-10.png"
                            alt="product image"
                            width={500}
                            height={500}
                        />
                        <div className="flex flex-col justify-center ml-4  ">
                            <h3 className="text-sm uppercase ">Iphone 10</h3>
                            <p className="text-[#72AEC8] text-sm">$980</p>
                        </div>

                    </div>

                    <div className="flex text-center items-center  gap-2 ">
                        <button className="px-2   lg:px-4 lg:py-2 shadow-lg ">-</button>
                        <div className="w-16 lg:w-20 lg:py-2  shadow-lg ">1</div>
                        <button className="px-2  lg:px-4 lg:py-2   shadow-lg ">+</button>
                    </div>

                    <div className="flex gap-2 lg:gap-16 text-center items-center">
                        <h5 className="text-[#72AEC8] text-xl lg:text-3xl">$980.00</h5>
                        <Image
                            className="w-6"
                            src="/icons/close-icon.png"
                            width={40}
                            height={40}
                            alt="remove-icon"
                        />
                    </div>

                </div> */}


            </div>
        </>
    );
};

export default CartItem;
