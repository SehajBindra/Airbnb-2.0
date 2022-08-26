import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] ">
      <Image
        className=""
        layout="fill"
        src="https://links.papareact.com/0fm"
        objectFit="cover"
      />

      <div>
        <p className="absolute top-half">Not sure Where to go? Perfect</p>
      </div>
    </div>
  );
}

export default Banner;
