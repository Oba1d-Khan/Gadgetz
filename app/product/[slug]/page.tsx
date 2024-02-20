import { client, urlFor } from "@/app/lib/sanity"
import Image from "next/image"
import Link from "next/link"
import { AddToCartBtn } from "@/components/index"
import { ShoppingCart, ChevronLeft } from "lucide-react";


const getData = async (slug) => {
    const query = `*[_type == 'product' && slug.current == '${slug}' ][0] {
        _id,
        images,
        price,
        price_id,
        name,
        description,
        "slug" : slug.current,
        "category" : categories->{name}
    }`;
    const data = await client.fetch(query);
    return data;
}

const ProductDetails = async ({ params }) => {
    const product = await getData(params.slug);

    return (
        <section className="max-w-[85vw] md:max-w-[70vw] my-6 mx-auto py-4 md:grid md:grid-cols-2 ">

            <div className="">
                <Link href="/products">
                    <button className=" bg-[#72AEC8] text-white rounded-md  px-2 py-2 text-sm md:text-[8px] md:py-2 md:px-6 lg:px-6 lg:py-2 lg:text-[10px] font-medium tracking-wide mb-4 ">
                        <ChevronLeft size={20} strokeWidth={3} />
                    </button>
                </Link>

                <Image
                    className="w-full md:max-w-[20vw]"
                    src={urlFor(product.images[0]).url()}
                    width={500}
                    height={500}
                    quality={100}
                    alt="product-img"
                />
            </div>

            <div className="flex flex-col items-center justify-center gap-4 py-4 md:items-start   ">
                <h3 className="uppercase text-[#272727] text-xl font-medium ">{product.name}</h3>
                <p className="text-[#3A3A3A] text-sm">
                    {product.description}
                </p>
                <h5 className="text-[#72AEC8] font-medium">${product.price}</h5>

                <AddToCartBtn
                    id={product.id}
                    name={product.name}
                    currency="USD"
                    description={product.description}
                    images={product.images}
                    price={product.price}
                />

            </div>


        </section>
    )
}

export default ProductDetails