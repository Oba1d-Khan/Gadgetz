'use client'

import { FaMagnifyingGlass } from "react-icons/fa6"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useRouter, useSearchParams } from "next/navigation"


const ProductSearch = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const holdSearchQuery = searchParams.get('search') ?? ''

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const searchQuery = formData.get('search')
        router.replace(`/products/?search=${searchQuery}`)
    }
    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <form onSubmit={handleSubmit}>
                <Input
                    id="search"
                    name="search"
                    type="search"
                    placeholder="Search"
                    autoComplete="off"
                    defaultValue={holdSearchQuery}
                />
                <Button type="submit">
                    <FaMagnifyingGlass />
                </Button>
            </form>
        </div>
    )
}

export default ProductSearch