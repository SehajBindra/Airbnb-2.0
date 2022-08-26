import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="sticky z-50 shadow-md top-0 grid grid-cols-3 bg-white p-5 md:px-10">
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          objectFit="contain"
          objectPosition="left"
          layout="fill"
          src="https://links.papareact.com/qd3"
        />
      </div>

      {/* center */}
      <div className="bg-white rounded-full p-5">
        <input
          className=" focus-within:outline-none bg-transparent flex items-center flex-grow"
          type="text"
          placeholder="Search Your dates"
        />
      </div>

      {/* right */}
      <div></div>
    </header>
  );
}

export default Header;
