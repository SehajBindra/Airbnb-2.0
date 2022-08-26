import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="relative h-[300px]">
      <Image
        className=""
        layout="fill"
        src="https://links.papareact.com/0fm"
        objectFit="cover"
      />
    </div>
  );
}

export default Banner;
