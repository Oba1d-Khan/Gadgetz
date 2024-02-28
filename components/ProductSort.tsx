"use client"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { sortOption } from "@/constants"
import { useRouter } from "next/navigation"


const ProductSort = () => {

    const router = useRouter();

    return (
        <Select onValueChange={(value) => router.replace(`/products/${value}`)}>

            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Default sorting" />
            </SelectTrigger>
            <SelectContent>
                {sortOption.map((sort) =>
                    <SelectItem key={sort.name} value={sort.value}>{sort.name}</SelectItem>
                )}
            </SelectContent>
        </Select >
    )
}

export default ProductSort