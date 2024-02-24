"use client"
import { Button, CartItem, Header } from "@/components/index";

const Cart = () => {

    return (
        <>
            <Header Heading={"Cart"} />
            <section className="max-w-[90vw] md:max-w-[85vw] mx-auto my-8 py-4 ">

                <div className="grid grid-cols-[30vw_20vw_20vw] md:grid-cols-[40vw_20vw_20vw] justify-around md:justify-between uppercase border-b border-gray-400 my-4 py-4">
                    <h3>Product</h3>
                    <h3>Quantity</h3>
                    <h3>Subtotal</h3>
                </div>

                <CartItem />

                <div className="py-6 md:py-12 ">

                    <div className="py-4 ">
                        <h1 className="uppercase text-xl font-medium">Cart Totals</h1>

                        <div className="flex justify-between md:max-w-[35vw] py-4 ">
                            <h3 className="uppercase md:text-lg underline">Subtotal</h3>
                            <h3 className="uppercase text-lg text-[#72AEC8]">$1500.00</h3>
                        </div>
                        <div className="w-full border-b border-gray-400 "></div>

                        <div className="flex justify-between md:max-w-[35vw] py-4 ">
                            <h3 className="uppercase md:text-lg underline">Total</h3>
                            <h3 className="uppercase text-lg text-[#72AEC8]">$1500.00</h3>
                        </div>
                        <div className="w-full border-b border-gray-400 "></div>

                    </div>

                    <div className="flex  gap-2 md:gap-4">
                        <Button type="button" title="update cart" variant="bg-[#272727]" />
                        <Button type="button" title="continue shopping" variant="bg-[#272727]" />
                        <Button type="button" title="proceed to checkout" variant="bg-[#272727]" />
                    </div>

                </div>



            </section>
        </>
    );
};

export default Cart;
