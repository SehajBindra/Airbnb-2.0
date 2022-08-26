import Image from "next/image";
import React from "react";
import {
  Bars3Icon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

function Header() {
  return (
    <header className="sticky z-50 shadow-md top-0 grid grid-cols-3 bg-white p-5 md:px-10">
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
      <div className=" flex  items-center sm:border-2 sm:rounded-full p-3  sm:shadow-md ">
        <input
          className=" sm:pl-4 focus-within:outline-none bg-transparent flex items-center flex-grow text-gray-600 placeholder:text-gray-400"
          type="text"
          placeholder="Search Your dates"
        />
        <MagnifyingGlassIcon className="hidden md:inline h-8 text-white bg-red-400 rounded-full p-2 cursor-pointer" />
      </div>

      {/* right */}
      <div className="flex items-center justify-end text-gray-500 space-x-3">
        <p>Become a host</p>
        <GlobeAltIcon className="h-5" />
        <div className="flex items-center space-x-3 rounded-full border-2 py-2">
          <Bars3Icon className="h-5" />
          <img
            className="avatar"
            src="https://pbs.twimg.com/profile_images/1208234904405757953/mT0cFOVQ_400x400.jpg"
            alt=""
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
