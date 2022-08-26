import Image from "next/image";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

function Header() {
  return (
    <header className="sticky z-50 shadow-md top-0 grid grid-cols-3 bg-white p-5 md:px-10">
      {/* left */}
      <div className=" hidden relative sm:flex items-center h-10 cursor-pointer my-auto">
        <Image
          objectFit="contain"
          objectPosition="left"
          layout="fill"
          src="https://links.papareact.com/qd3"
        />
      </div>

      {/* center */}
      <div className=" flex items-center border-2 rounded-full p-2 flex-grow">
        <input
          className=" focus-within:outline-none bg-transparent flex items-center flex-grow"
          type="text"
          placeholder="Search Your dates"
        />
        <MagnifyingGlassIcon className="h-8 text-white bg-red-400 rounded-full p-2 cursor-pointer" />
      </div>

      {/* right */}
      <div></div>
    </header>
  );
}

export default Header;
