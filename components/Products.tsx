import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { client, urlFor } from "../app/lib/sanity";
import { AddToCartBtn, Header } from "@/components/index";
const Products = async () => {
    const getData = async () => {
        const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'All']._id, categories)]

    {
    _id,
     name,
     description,
      images,
     price,
     price_id,
     "slug" : slug.current,
     "categories": categories[]-> {
        name
      }
  }`;

        const data = await client.fetch(query);
        return data;
    };

    const products = await getData();
    return (
        <div>
            {" "}
            <div className="">
                <div className="flex items-center justify-between h-8 my-2 text-xs md:w-full md:text-md max-w-[96vw]">
                    <h5>Showing 1-9 of 55 results</h5>
                    <h5>Default Sorting arrow</h5>
                </div>

                {/* products grid */}
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 justify-items-center lg:grid-cols-4 md:gap-4">
                    {products.map((product: any) => (
                        <div key={product._id} className="">
                            <Link
                                className="relative flex flex-col overflow-hidden transition bg-white rounded-md group hover:shadow-lg"
                                href={`product/${product.slug}`}
                            >
                                <div className="overflow-hidden">
                                    <Image
                                        className="max-w-[40vw] md:max-w-[10vw] md:object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                        src={urlFor(product.images[0]).url()}
                                        alt="product image"
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <div className="flex items-center justify-between px-2 py-1">
                                    <h3 className="text-sm uppercase">{product.name}</h3>
                                    <p className="text-[#72AEC8] text-sm">${product.price}</p>
                                </div>

                                <div className="absolute flex items-center justify-center transition-opacity duration-300 transform -translate-x-1/2 opacity-0 bottom-10 left-1/2 group-hover:opacity-100">
                                    <AddToCartBtn />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* pagination */}
                <div className="md:max-w-[20vw] lg:max-w-[10vw] mx-auto font-semibold flex justify-between items-center py-12">
                    <Image
                        src="/icons/angle-left.png"
                        width={40}
                        height={40}
                        alt="angle"
                    />
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <Image
                        src="/icons/angle-right.png"
                        width={40}
                        height={40}
                        alt="angle"
                    />
                </div>
            </div>
        </div>
    );
};

export default Products;
