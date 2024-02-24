import {
    brandsFilter,
    categoriesFilter,
    pricesFilter,
    tagsFilter,
} from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { client, urlFor } from "../lib/sanity";
import { Eye } from 'lucide-react';
import { AddToCartBtn } from "@/components/index";


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

const page = async () => {
    const products = await getData();
    // console.log(products);

    return (
        <>
            <main >
                <header className="bg-[#EDF1F3] w-screen mx-auto ">
                    <div className="flex flex-col items-center justify-center py-10 ">
                        <h1 className="md:w-[35vw] font-light uppercase text-center text-5xl  ">
                            Products
                        </h1>
                        <p>breadcrumb ⚠️</p>
                    </div>
                </header>

                <section className="max-w-[90vw] md:max-w-[85vw] mx-auto py-6 grid grid-cols-[60vw_20vw] justify-between md:justify-around ">

                    {/* -------------- left column -----------------*/}
                    <div className="">
                        <div className="w-full h-8 my-2 text-xs md:text-md flex justify-between items-center ">
                            <h5>Showing 1-9 of 55 results</h5>
                            <h5>Default Sorting arrow</h5>
                        </div>

                        {/* products grid */}
                        <div className="grid md:grid-cols-3 gap-3 justify-items-center lg:grid-cols-4 md:gap-4">

                            {products.map((product) => (
                                <div key={product._id} className="" >

                                    <Link
                                        className="flex flex-col group bg-white overflow-hidden hover:shadow-lg transition rounded-md relative"
                                        href={`product/${product.slug}`}
                                    >
                                        <div className="overflow-hidden">
                                            <Image
                                                className="md:max-w-[10vw] md:object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                                src={urlFor(product.images[0]).url()}
                                                alt="product image"
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                        <div className="flex justify-between items-center py-1 px-2">
                                            <h3 className="text-sm uppercase">{product.name}</h3>
                                            <p className="text-[#72AEC8] text-sm">${product.price}</p>
                                        </div>

                                        <div className="flex justify-center items-center  absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            <AddToCartBtn />
                                        </div>

                                    </Link>

                                </div>
                            ))}
                        </div>

                        <div className="font-bold flex justify-center items-center py-8">Pagination ⚠️</div>

                    </div>

                    {/* ------------- right column --------------- */}
                    <div className="">
                        <p className="font-bold">Search ⚠️</p>

                        {/* Filter Lists */}
                        <div>
                            <div>
                                <h1 className="uppercase underline tracking-wide font-medium mt-4">
                                    Categories
                                </h1>
                                <ul className="py-2 flex flex-col gap-1">
                                    {categoriesFilter.map((item) => (
                                        <Link href={item.href} key={item.key} className="">
                                            {item.label}
                                        </Link>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h1 className="uppercase underline tracking-wide font-medium mt-4">
                                    Tags
                                </h1>
                                <ul className="py-2 flex flex-col gap-1">
                                    {tagsFilter.map((item) => (
                                        <Link href={item.href} key={item.key} className="">
                                            {item.label}
                                        </Link>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h1 className="uppercase underline tracking-wide font-medium mt-4">
                                    Brands
                                </h1>
                                <ul className="py-2 flex flex-col gap-1">
                                    {brandsFilter.map((item) => (
                                        <Link href={item.href} key={item.key} className="">
                                            {item.label}
                                        </Link>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h1 className="uppercase underline tracking-wide font-medium mt-4">
                                    Filter by Price
                                </h1>
                                <ul className="py-2 flex flex-col gap-1">
                                    {pricesFilter.map((item) => (
                                        <Link href={item.href} key={item.key} className="">
                                            {item.label}
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default page;
