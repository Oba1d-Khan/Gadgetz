'use client'
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/app/redux/CartReducer";
import { toast } from "./ui/use-toast";


const AddToCartBtn = ({ product }) => {

    const { productData } = useSelector((state: any) => state.cart)
    console.log(productData);
    const dispatch = useDispatch();

    return (
        <>
            <Button
                variant="outline"
                onClick={() => {
                    dispatch(addToCart(product));
                    toast({
                        title: "Product Added To Cart!",
                    })
                }}

            >
                Add to Cart
            </Button >
        </>
    );
};

export default AddToCartBtn;