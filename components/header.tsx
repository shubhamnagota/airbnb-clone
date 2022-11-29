import React from "react";
import Image from "next/image";
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Logo */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image src="/logo.png" alt="logo" layout="fill" objectFit="contain" objectPosition="left" />
      </div>

      {/* Search */}
      <div className="flex items-center rounded-full py-2 md:border-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search!"
          className="pl-5 flex-grow bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* UserInfo */}
      <div className="flex space-x-4 items-center justify-end">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center border-2 p-2 rounded-full">
          <MenuIcon  className="h-6"/>
          <UserCircleIcon className="h-6"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
