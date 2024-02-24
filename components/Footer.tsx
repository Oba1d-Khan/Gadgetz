import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full max-w-[80vw] py-12  mx-auto ">
            {/* Footer */}
            <div className="grid grid-cols-2 mb-8 md:grid-cols-3 lg:grid-cols-4 gap-7">
                <div className="col-span-full lg:col-span-1 lg:block">
                    <Link href="/" className="text-3xl font-medium">
                        Gadgetz<span className="text-[#72AEC8]">.</span>{" "}
                    </Link>
                    <p className="my-3 text-xs sm:text-sm  text-[#3A3A3A] ">
                        Sync Your Style with Technology: Discover Watches and Smartphones Galore!
                    </p>

                    {/* Social Links */}
                    <div className="space-x-4">
                        <Link className="inline-block" href="#">
                            <Image
                                src="/icons/fb-logo.png"
                                width={20}
                                height={20}
                                alt="fb-logo"
                                className="transition-transform duration-300 hover:scale-110"
                            />
                        </Link>
                        <Link className="inline-block" href="#">
                            <Image
                                src="/icons/ig-logo.png"
                                width={16}
                                height={16}
                                alt="ig-logo"
                                className="transition-transform duration-300 hover:scale-110"
                            />
                        </Link>
                        <Link className="inline-block" href="#">
                            <Image
                                src="/icons/twitter-logo.png"
                                width={16}
                                height={16}
                                alt="ig-logo"
                                className="transition-transform duration-300 hover:scale-110"
                            />
                        </Link>
                        <Link className="inline-block" href="#">
                            <Image
                                src="/icons/linkedIn-logo.png"
                                width={16}
                                height={16}
                                alt="ig-logo"
                                className="transition-transform duration-300 hover:scale-110"
                            />
                        </Link>
                        <Link className="inline-block " href="#">
                            <Image
                                src="/icons/youtube-logo.png"
                                width={16}
                                height={16}
                                alt="ig-logo"
                                className="transition-transform duration-300 hover:scale-110 "
                            />
                        </Link>
                    </div>

                </div>

                {/* Quick Links */}
                <div className="lg:ml-10">
                    <h4 className="text-sm font-semibold text-[#272727] uppercase ">
                        Quick Links
                    </h4>

                    <div className="grid mt-3 space-y-3 text-xs uppercase">
                        <p>
                            <a
                                className="inline-flex gap-x-2 text-[#272727] hover:text-[#72AEC8]    dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                Home
                            </a>
                        </p>
                        <p>
                            <a
                                className="inline-flex gap-x-2 text-gray-900 hover:text-[#72AEC8] dark:text-black   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                About
                            </a>
                        </p>
                        <p>
                            <a
                                className="inline-flex gap-x-2 text-gray-900 hover:text-[#72AEC8] dark:text-black   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                Shop
                            </a>
                        </p>
                        <p>
                            <a
                                className="inline-flex gap-x-2 text-gray-900 hover:text-[#72AEC8] dark:text-black   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                Blogs
                            </a>
                        </p>{" "}
                        <p>
                            <a
                                className="inline-flex gap-x-2 text-gray-900 hover:text-[#72AEC8] dark:text-black   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                Contact
                            </a>
                        </p>
                    </div>
                </div>

                {/* Help & Info */}
                <div>
                    <h4 className="text-sm font-semibold text-[#272727] uppercase ">
                        Help & Info
                    </h4>

                    <div className="grid mt-3 space-y-3 text-xs uppercase">
                        <p>
                            <a
                                className="inline-flex gap-x-2 text-gray-900 hover:text-[#72AEC8] dark:text-black   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                Track Your Order
                            </a>
                        </p>
                        <p>
                            <a
                                className="inline-flex gap-x-2 text-gray-900 hover:text-[#72AEC8] dark:text-black   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                Return Policies
                            </a>
                        </p>
                        <p>
                            <a
                                className="inline-flex gap-x-2 text-gray-900 hover:text-[#72AEC8] dark:text-black   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                Shipping + Delivery
                            </a>{" "}
                        </p>
                        <p>
                            <a
                                className="inline-flex gap-x-2 text-gray-900 hover:text-[#72AEC8] dark:text-black   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                Contact Us
                            </a>
                        </p>
                        <p>
                            <a
                                className="inline-flex gap-x-2 text-gray-900 hover:text-[#72AEC8] dark:text-black   dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >
                                Faqs
                            </a>
                        </p>
                    </div>
                </div>

                {/* Contact Us */}
                <div>
                    <h4 className="text-sm font-semibold text-gray-900 uppercase dark:text-black">
                        Contact Us
                    </h4>

                    <div className="grid mt-3 space-y-3 text-sm">
                        <p>
                            <Link
                                className="inline-flex flex-col gap-x-2  text-[#3A3A3A]  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >Do you have any queries or suggestions?
                                <span className="underline font-[500] text-[#272727] hover:text-[#72AEC8]">
                                    yourinfo@gmail.com
                                </span>
                            </Link>
                        </p>
                        <p>
                            <Link
                                className="inline-flex flex-col gap-x-2 text-[#3A3A3A]  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                href="#"
                            >If you need support? Just give us a call.
                                <span className="underline font-[500] text-[#272727] hover:text-[#72AEC8]">
                                    +55 111 222 333 44
                                </span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>


        </footer>
    );
};

export default Footer;
