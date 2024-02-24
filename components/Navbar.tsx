"use client";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [animationParent] = useAutoAnimate()
  const [toggle, setToggle] = useState(false);

  const pathname = usePathname()

  return (
    <>
      <nav className="relative mx-auto max-w-[1920px] flex align-center justify-between px-6 lg:px-20 3xl:px-0 py-5 z-30 shadow-md " >

        {/* LOGO */}
        <div>
          <Link href="/" className="text-2xl font-semibold">Gadgetz<span className="text-[#72AEC8]">.</span> </Link>
        </div>

        <div>
          <ul className="items-center hidden h-full gap-12 md:flex md:gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <Link key={link.key} href={link.href}
                className={`${pathname === link.href && "border-b border-gray-400 pb-1"}`}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
          </ul>
        </div>

        {/* nav icons */}
        <div className="flex items-center justify-between gap-8 md:gap-12 ">

          <div>
            <ul className="flex gap-5">
              <Link href="#">
                <Image
                  src="/icons/search-icon.png"
                  width={20}
                  height={20}
                  alt="search-icon"
                />
              </Link>


              < Link href="#">
                <Image
                  src="/icons/user-icon.png"
                  width={20}
                  height={20}
                  alt="user-icon"
                />
              </Link>



              <div className="relative mr-4 cursor-pointer"
              >
                <Image
                  src="/icons/cart-icon.png"
                  width={20}
                  height={20}
                  alt="cart-icon"
                />
                <div className=" w-[35px] h-[15px] absolute left-6 bottom-1 ">
                  (0)
                </div>

              </div>
            </ul>
          </div>

          {/* mobile pop-up menu  */}
          <div className="md:hidden " ref={animationParent}>


            <Image
              src={!toggle ? "/icons/menu-burger.png" : "/icons/close-icon.png"}
              width={20}
              height={20}
              alt="hamburger-menu"
              onClick={() => setToggle((prev) => !prev)}
            />

            {toggle &&
              <div className="lg:hidden max-h-[84vh] fixed inset-x-0 top-20 mx-6 flex flex-col items-center rounded-xl bg-gray-800 text-white z-40 shadow-gray-800 shadow-2xl  ">

                <div className="flex flex-col items-center justify-center h-screen gap-8 text-xl">
                  {navLinks.map((link) => (
                    <Link key={link.key} href={link.href}>
                      {link.label.toUpperCase()}
                    </Link>
                  ))}
                </div>
              </div>
            }

          </div>


        </div>
      </nav >
    </>
  );
};

export default Navbar;
