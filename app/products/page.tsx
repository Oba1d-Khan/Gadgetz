import { Filters } from "@/constants";
import { Header, CategoryFilter, ProductsListing } from "@/components/index";
import { client } from "../lib/sanity";
import { ProductFilters } from "@/components/index";


interface Props {
    searchParams: {
        date?: string;
        price?: string;
        category?: string;
        tag?: string;
        brand?: string;
    };
}

const page = async ({ searchParams }: Props) => {

    const { date, price, category, tag, brand } = searchParams


    const productQuery = `_type == 'product' `

    const priceOrder = price ? `| order(price ${price} )` : "";
    const dateOrder = date ? `| order(_createdAt ${date} )` : "";
    const order = `${priceOrder}${dateOrder}`;

    const categoryFilter = category ? `&& "${category}" in categories` : " "
    const tagFilter = tag ? `&& "${tag}" in tags` : " "
    const brandFilter = brand ? `&& "${brand}" in brands` : " "
    const filter = `*[${productQuery}${categoryFilter} ${tagFilter} ${brandFilter}]`

    const getData = async () => {
        const query = ` ${filter} ${order}
        {
        _id,
        _createdAt,
         name,
         description,
          images,
         price,
         price_id,
         "slug" : slug.current,
    }`

        const data = await client.fetch(query);
        return data;
    };

    const products = await getData();

    return (
        <>
            <main>
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
                            <ProductFilters />
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
