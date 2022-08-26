import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header>
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer">
        <Image
          objectFit="contain"
          objectPosition="left"
          layout="fill"
          src="https://links.papareact.com/qd3"
        />
      </div>

      {/* center */}
      <div></div>

      {/* right */}
      <div></div>
    </header>
  );
}

export default Header;
