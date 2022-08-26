import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div>
      <div className="relative h-24 w-40 md:h-52 md:w-80">
        <Image objectFit="cover" layout="fill" src={img} />
      </div>

      <div>
        <div className="flex justify-between">
          <p> {location} </p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
