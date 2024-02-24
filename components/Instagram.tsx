import Image from "next/image";
import Link from "next/link";

const Instagram = () => {
    return (
        <>
            <section className="p-6">
                <div className="mb-8 text-center mt-14">
                    <h1 className="text-xl uppercase">Shop Our Insta</h1>
                </div>

                <div className="md:max-w-[60vw] md:mx-auto">

                    <div className="relative grid items-center justify-center grid-cols-3 gap-2 mx-auto sm:grid-cols-5">
                        <Image className="object-cover w-full h-full sm:w-40" src="/images/iphone-10.png" alt="Image Description" width={500} height={500} />
                        <Image className="object-cover w-full h-full sm:w-40" src="/images/black-watch.png" alt="Image Description" width={500} height={500} />
                        <Image className="object-cover w-full h-full sm:w-40" src="/images/iphone-11.png" alt="Image Description" width={500} height={500} />
                        <Image className="object-cover w-full h-full sm:w-40" src="/images/post-2.png" alt="Image Description" width={500} height={500} />
                        <Image className="object-cover w-full h-full sm:w-40" src="/images/post-3.png" alt="Image Description" width={500} height={500} />

                        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-full overflow-hidden transition duration-300 ease-in-out opacity-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-80 hover:scale-105 hover:shadow-gray-600 hover:shadow-xl">
                            <Image src="/icons/hover-ig-logo.png" width={50} height={50} alt="ig-logo" />
                        </div>


                    </div>


                </div>

            </section>
        </>
    );
};

export default Instagram;
