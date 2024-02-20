"use client";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { CartItem } from "@/components/index";
import { useShoppingCart } from "use-shopping-cart";

const Cart = () => {
    const {
        cartCount,
        cartDetails,
        shouldDisplayCart,
        handleCartClick,
        totalPrice,
    } = useShoppingCart();

    return (
        <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="text-left mb-12">
                        My Cart ({cartCount})
                    </SheetTitle>
                </SheetHeader>
                <>
                    {cartCount === 0 ? (
                        <div className="flex flex-col items-center justify-center w-full h-[760px]">
                            <h5>Your cart is empty</h5>
                        </div>
                    ) : (
                        <ScrollArea className="h-[70vh] xl:h-[74vh] pr-4 mb-4">
                            {cartDetails &&
                                Object.entries(cartDetails).map(([key, item]) => {
                                    return <CartItem item={item} key={key} />;
                                })}

                        </ScrollArea>
                    )}
                </>
                {
                    cartCount > 0 && (
                        <div>
                            <div className="flex justify-between font-semibold">
                                <h5 className="uppercase mb-5">Total</h5>
                                <h5>${totalPrice}</h5>
                            </div>
                        </div>
                    )
                }
            </SheetContent>
        </Sheet>
    );
};

export default Cart;
