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
        <p className=" text-sm sm:text-lg absolute top-1/2 w-full text-center">
          Not sure Where to go? Perfect
        </p>

        <button className="shadow-md bg-white text-purple-500">
          I'm Flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
