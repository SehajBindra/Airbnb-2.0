import Image from "next/image";
import React from "react";

function SmallCard({ img, distance, location }) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {/* left */}
      <div className="relative h-20 w-20 ">
        <Image className="rounded-lg" src={img} layout="fill" />
      </div>

      {/* right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
