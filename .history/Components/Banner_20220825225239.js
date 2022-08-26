import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] ">
      <Image
        priority="true"
        layout="fill"
        src="https://links.papareact.com/0fm"
        objectFit="cover"
      />

      <div className="absolute text-sm sm:text-lg top-1/2 w-full text-center">
        <p className=" text-sm sm:text-lg top-1/2 w-full text-center">
          Not sure Where to go? Perfect
        </p>
        <button className="shadow-md bg-white text-purple-500 rounded-full px-10 py-4 my-3 font-semibold hover:shadow-xl active:scale-90 transition duration-150">
          I'm Flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
