import { Header, CategoryFilter, ProductsListing, ProductSearch } from "@/components/index";
import { client } from "../lib/sanity";
import { ProductFilters } from "@/components/index";

interface Props {
    searchParams: {
        date?: string;
        price?: string;
        category?: string;
        tag?: string;
        brand?: string;
        search?: string;
    };
}

const page = async ({ searchParams }: Props) => {

    const { date, price, category, tag, brand, search } = searchParams


    const productQuery = `_type == 'product' `

    const priceOrder = price ? `| order(price ${price} )` : "";
    const dateOrder = date ? `| order(_createdAt ${date} )` : "";
    const order = `${priceOrder}${dateOrder}`;

    const categoryFilter = category ? `&& "${category}" in categories` : " "
    const tagFilter = tag ? `&& "${tag}" in tags` : " "
    const brandFilter = brand ? `&& "${brand}" in brands` : " "
    const searchFilter = search ? `&& name match "${search}"` : " "
    const filter = `*[${productQuery}${categoryFilter} ${tagFilter} ${brandFilter} ${searchFilter}]`

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

                        <ProductSearch />

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
