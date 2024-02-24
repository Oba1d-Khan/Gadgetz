import { Breadcrumb } from "@/components/index"

const Header = ({ Heading }) => {
    return (
        <>
            <header className="bg-[#EDF1F3] w-screen mx-auto ">
                <div className="flex flex-col items-center justify-center py-10 ">
                    <h1 className="md:w-[35vw] font-light uppercase text-center text-5xl  ">
                        {Heading}
                    </h1>
                    <Breadcrumb />
                </div>
            </header>
        </>

    )
}

export default Header