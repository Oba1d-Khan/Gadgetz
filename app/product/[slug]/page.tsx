import { client, urlFor } from "@/app/lib/sanity"
import Image from "next/image"
import Link from "next/link"
import { AddToCartBtn, ProductsSection } from "@/components/index"
import { ShoppingCart, ChevronLeft } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button"

interface Props {
    params: {
        slug: string
    }
}

const ProductDetails = async ({ params }: Props) => {
    const query = `*[_type == 'product' && slug.current == '${params.slug}' ][0] 
        {
            _id,
            _createdAt,
             name,
             description,
              images,
             price,
             price_id,
             "slug" : slug.current,
        }`;

    const product = await client.fetch(query);

    return (
        <>
            <section className="max-w-[85vw] my-16 mx-auto py-10 border-b border-gray-300 ">

                <div className="md:grid md:grid-cols-2 gap-6">
                    <div className="">
                        <Link href="/products">
                            <button className=" bg-[#72AEC8] text-white rounded-md  px-2 py-2 text-sm md:text-[8px] md:py-2 md:px-6 lg:px-6 lg:py-2 lg:text-[10px] font-medium tracking-wide mb-4 ">
                                <ChevronLeft size={20} strokeWidth={3} />
                            </button>
                        </Link>

                        <Image
                            className="w-full md:max-w-[50vw] "
                            src={urlFor(product.images[0]).url()}
                            width={500}
                            height={500}
                            quality={100}
                            alt="product-img"
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center gap-4 py-4 md:items-start   ">
                        <h3 className="uppercase text-[#272727] text-xl font-medium ">{product.name}</h3>
                        <h5 className="flex items-center gap-2"><FaStar /> 5.0</h5>
                        <h5 className="text-[#72AEC8] text-xl font-medium">${product.price}.00</h5>
                        <p className="text-[#3A3A3A] text-sm">
                            {product.description}
                        </p>

                        <h3 className="uppercase underline font-medium">Color</h3>
                        <div className="flex gap-2 text-sm">
                            <Link href="#" className="text-[]">Orange</Link>
                            <Link href="#">Green</Link>
                            <Link href="#">Blue</Link>
                            <Link href="#">Black</Link>
                        </div>

                        <h3 className="uppercase underline">Size</h3>
                        <div className="flex gap-2 text-sm font-medium">
                            <Link href="#">XL</Link>
                            <Link href="#">L</Link>
                            <Link href="#">M</Link>
                            <Link href="#">S</Link>
                        </div>

                        <h5 className="text-sm">2 in stock</h5>

                        <div className="flex text-center items-center  gap-2 ">
                            <button className="px-2   lg:px-4 lg:py-2 shadow-lg ">-</button>
                            <div className="w-16 lg:w-20 lg:py-2  shadow-lg ">1</div>
                            <button className="px-2  lg:px-4 lg:py-2   shadow-lg ">+</button>
                        </div>

                        <div className="">
                            <AddToCartBtn product={product} />
                        </div>

                        <div>
                            <h5 className="text-sm">Category: Watch, Screen Touch</h5>
                        </div>
                    </div>
                </div>

                <div className="max-w-[60vw] mx-auto flex flex-col gap-2 lg:gap-0 lg:flex-row  justify-around items-center uppercase py-12 md:text-lg tracking-wide">
                    <h2>Description</h2>
                    <h2>Additional Information</h2>
                    <h2>Reviews(2)</h2>
                </div>

                <div>
                    <h1>Product Description</h1>
                    <p className="text-[#3A3A3A] text-sm">
                        {product.description}
                    </p>
                </div>


            </section>

            <div className="pb-14">
                <ProductsSection sectionTitle="Related Products" />
                <p className="text-2xl flex gap-18 items-center justify-center">...</p>
            </div>

        </>
    )
}

export default ProductDetails