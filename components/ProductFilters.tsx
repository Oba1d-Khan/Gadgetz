"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Filters } from "@/constants";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const ProductFilters = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const searchValues = Array.from(searchParams.entries());

    return (
        <div>
            <div>
                <h1 className="mt-4 font-medium tracking-wide underline uppercase">
                    Categories
                </h1>

                {Filters.map((section) => (
                    <Accordion type="single" collapsible key={section.id}>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                {section.name}
                                <span className="text-xs underline font-light">
                                    {searchParams.get(section.id)
                                        ? `${searchParams.get(section.id)}`
                                        : null}
                                </span>
                            </AccordionTrigger>
                            <AccordionContent>
                                {section.options.map((option) => (
                                    <div key={option.value}>
                                        <Checkbox
                                            checked={searchValues.some(
                                                ([key, value]) =>
                                                    key === section.id && value === option.value
                                            )}
                                            onClick={(event) => {
                                                const params = new URLSearchParams(searchParams);
                                                const checked =
                                                    event.currentTarget.dataset.state === "checked";
                                                checked
                                                    ? params.delete(section.id)
                                                    : params.set(section.id, option.value);
                                                router.replace(`/products/?${params.toString()}`);
                                            }}
                                        />
                                        <label>{option.label}</label>
                                    </div>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))}
            </div>
        </div>
    );
};

export default ProductFilters;
