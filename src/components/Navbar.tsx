"use client"

import NavbarItem from "@/components/NavbarItem";
//import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import MobileMenu from "@/components/MobileMenu";
import { useCallback, useEffect, useState } from "react";
import AccountMenu from "@/components/AccountMenu";
import Link from "next/link";
import { Bell, ChevronDown, MessageCircle, Search } from "lucide-react";
import { Button } from "./ui/button";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  const toggleMobileMenu = useCallback(
    () => setShowMobileMenu((current) => !current),
    []
  );

  const toggleAccountMenu = useCallback(
    () => setAccountMenu((current) => !current),
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setShowBackground(window.scrollY > TOP_OFFSET);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed z-40 w-full ">
      <div
        className={`flex flex-row items-center px-4 py-6 transition duration-500 md:px-16 ${
          showBackground ? `bg-zinc-900 bg-opacity-90` : ``
        }`}
      >
        <Link href={"/"}>
          <img src="/images/logo.png" alt="logo" className="h-10 lg:h-14" />
        </Link>
        <div className="ml-8 hidden flex-row gap-7 lg:flex">
          <NavbarItem link="/" label="Home" />
          <NavbarItem link="/" label="Popular" />
          <NavbarItem link="/" label="New" />
        </div>
        <div className="ml-8 flex cursor-pointer flex-row items-center gap-2 lg:hidden">
          <p className="text-sm text-white">Browse</p>
          <ChevronDown
            onClick={toggleMobileMenu}
            className={`text-white transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="ml-auto flex flex-row items-center gap-7">
          {/* <div className="cursor-pointer text-gray-200 transition hover:text-gray-300">
            <Search />
          </div>
          <div className="cursor-pointer text-gray-200 transition hover:text-gray-300">
            <Bell />
          </div> */}
          <Button className="rounded-sm bg-zinc-100/80 text-black hover:text-black hover:bg-zinc-500" asChild>
            <Link href={"/feedback"}>
            <MessageCircle/>
            Feedback
            </Link>
          </Button>

          <div
            onClick={toggleAccountMenu}
            className="relative flex cursor-pointer flex-row items-center gap-2"
          >
            <div className="h-6 w-6 overflow-hidden rounded-md lg:h-10 lg:w-10">
              <img src="/images/default-blue.png" alt="User" />
            </div>
            <ChevronDown
              className={`text-white transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
