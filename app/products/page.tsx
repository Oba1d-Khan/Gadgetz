import {
    brandsFilter,
    categoriesFilter,
    pricesFilter,
    tagsFilter,
} from "@/constants";
import { Header, CategoryFilter, ProductsListing } from "@/components/index";
import Link from "next/link";
import { client } from "../lib/sanity";

interface Props {
    searchParams: {
        date?: string
        price?: string
    }
}

const page = async ({ searchParams }: Props) => {

    const priceOrder = searchParams.price ? ` | order(price ${searchParams.price} ) ` : ""
    const dateOrder = searchParams.date ? ` | order(_createdAt ${searchParams.date} )` : ""

    const order = `${priceOrder}${dateOrder}`


    const getData = async () => {
        const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'All']._id, categories)] ${order}

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


        <>
            <main >
                <Header Heading={"Products"} />


                <section className="max-w-[90vw] relative md:max-w-[85vw] mx-auto py-20 grid grid-cols-[80vw_10vw] gap-2 md:grid-cols-[60vw_20vw]  justify-between md:justify-around">

                    {/* -------------- left column -----------------*/}

                    <ProductsListing products={products} />


                    {/* ------------- right column --------------- */}


                    <div className="hidden md:block">

                        {/* Search */}
                        <div className="my-3 shadow-sm">
                            <div className="relative flex flex-wrap items-stretch mb-4">
                                <input
                                    type="search"
                                    className="relative m-0 block max-w-[2vw]  lg:max-w-[12vw] flex-auto  border border-solid border-neutral-100 bg-transparent bg-clip-padding px-6 py-[0.25rem] text-base  font-normal leading-[1.6] text-[#272727] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                    placeholder="Search"
                                    aria-label="Search"
                                    aria-describedby="button-addon2"
                                />

                                {/* <!--Search icon--> */}
                                <span
                                    className="input-group-text flex items-center whitespace-nowrap  px-3 py-1.5 text-center text-base font-normal  bg-[#272727]"
                                    id="basic-addon2"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="#FFFFFF"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        {/* Filter Lists */}
                        <div>
                            <div>
                                <h1 className="mt-4 font-medium tracking-wide underline uppercase">
                                    Categories
                                </h1>
                                <ul className="flex flex-col gap-1 py-2">
                                    {categoriesFilter.map((item) => (
                                        <Link href={item.href} key={item.key} className="">
                                            {item.label}
                                        </Link>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h1 className="mt-4 font-medium tracking-wide underline uppercase">
                                    Tags
                                </h1>
                                <ul className="flex flex-col gap-1 py-2">
                                    {tagsFilter.map((item) => (
                                        <Link href={item.href} key={item.key} className="">
                                            {item.label}
                                        </Link>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h1 className="mt-4 font-medium tracking-wide underline uppercase">
                                    Brands
                                </h1>
                                <ul className="flex flex-col gap-1 py-2">
                                    {brandsFilter.map((item) => (
                                        <Link href={item.href} key={item.key} className="">
                                            {item.label}
                                        </Link>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h1 className="mt-4 font-medium tracking-wide underline uppercase">
                                    Filter by Price
                                </h1>
                                <ul className="flex flex-col gap-1 py-2">
                                    {pricesFilter.map((item) => (
                                        <Link href={item.href} key={item.key} className="">
                                            {item.label}
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="md:hidden">
                        <CategoryFilter />
                    </div>

                </section>
            </main>
        </>
    );
};

export default page;
