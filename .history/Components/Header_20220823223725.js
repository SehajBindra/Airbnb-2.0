import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header>
      {/* left */}
      <div>
        <Image
          objectFit="contain"
          objectPosition="left"
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
