'use client'
import { ShoppingCart } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";


const AddToCartBtn = ({ id, name, currency, description, images, price, }) => {

    const { addItem } = useShoppingCart();

    const product = {
        id: id,
        currency: currency,
        name: name,
        description: description,
        images: images,
        price: price,
    }

    return (
        <>
            <button
                onClick={() => addItem(product)}
                className=" absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-[#272727] text-white   rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 px-6 py-3 text-sm md:text-[8px] md:py-2 md:px-6 lg:px-6 lg:py-2 lg:text-[10px] font-medium tracking-wide  uppercase ">
                <ShoppingCart size={20} />
            </button>
        </>
    );
};

export default AddToCartBtn;
