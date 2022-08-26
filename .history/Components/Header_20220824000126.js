import Image from "next/image";
import React from "react";

import {
  MagnifyingGlassIcon,
  Bars3Icon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="sticky z-50 shadow-md top-0 grid grid-cols-3 bg-white p-5 md:px-5">
      {/* left */}
      <div className=" relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          objectFit="contain"
          objectPosition="left"
          layout="fill"
          src="https://links.papareact.com/qd3"
        />
      </div>

      {/* center */}
      <div className=" flex  items-center flex-grow sm:border-2 sm:rounded-full p-3  sm:shadow-md ">
        <input
          className=" sm:pl-4 focus-within:outline-none bg-transparent flex items-center flex-grow text-gray-600 placeholder:text-gray-400"
          type="text"
          placeholder="Search Your dates"
        />
        <MagnifyingGlassIcon className="hidden sm:inline-flex h-8 w-8 text-white bg-red-400 rounded-full p-2 cursor-pointer" />
      </div>

      {/* right */}
      <div className="flex items-center justify-end text-gray-500 space-x-4 ">
        <p className="hidden sm:inline link ">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 rounded-full border-2 p-2">
          <Bars3Icon className="h-6 cursor-pointer" />
          <img
            className="avatar h-6 w-6"
            src="https://static1.srcdn.com/wordpress/wp-content/uploads/2018/08/Ryan-Reynolds-in-Deadpool.jpg"
            alt=""
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
