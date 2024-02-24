import Image from "next/image";

const Features = () => {
    return (
        <>
            <section className="grid gap-10 mx-auto p-10 justify-center md:justify-start md:grid md:grid-cols-2 md:px-10 lg:max-w-[80vw] xl:flex">
                <div className="flex gap-2">
                    <div>
                        <Image
                            src="/icons/cart-feature.png"
                            width={25}
                            height={25}
                            alt="cart-icon"
                        />
                    </div>
                    <div>
                        <h1 className="uppercase text-[#272727] text-md">Free Delivery</h1>
                        <p className="text-[#3A3A3A] text-sm">
                            Enjoy free delivery on all orders above $800.
                        </p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div>
                        <Image
                            src="/icons/award-feature.png"
                            width={25}
                            height={25}
                            alt="cart-icon"
                        />
                    </div>
                    <div>
                        <h1 className="uppercase text-[#272727] text-md">
                            Quality Guarantee
                        </h1>
                        <p className="text-[#3A3A3A] text-sm">
                            We guarantee top-notch quality products or your money back.
                        </p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div>
                        <Image
                            src="/icons/tags-feature.png"
                            width={25}
                            height={25}
                            alt="cart-icon"
                        />
                    </div>
                    <div>
                        <h1 className="uppercase text-[#272727] text-md">Daily Offers</h1>
                        <p className="text-[#3A3A3A] text-sm">
                            Explore new daily offers and save big on your favorite items.
                        </p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div>
                        <Image
                            src="/icons/shield-check-feature.png"
                            width={25}
                            height={25}
                            alt="cart-icon"
                        />
                    </div>
                    <div>
                        <h1 className="uppercase text-[#272727] text-md">
                            100% Secure Payment
                        </h1>
                        <p className="text-[#3A3A3A] text-sm">
                            Shop with confidence. Your payments are securely processed.
                        </p>
                    </div>
                </div>
            </section>

        </>
    );
};
export default Features;
