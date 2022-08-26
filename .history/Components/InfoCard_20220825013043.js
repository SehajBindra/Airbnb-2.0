import { HeartIcon, StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex">
      <div className="relative h-24 w-40 md:h-52 md:w-80">
        <Image
          className="rounded-xl"
          objectFit="cover"
          layout="fill"
          src={img}
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p> {location} </p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>

        <h4 className="text-xl"> {title} </h4>

        <div className="border-b w-10 pt-2" />

        <p className="pt-2 text-xs text-gray-500 flex-grow"> {description} </p>

        <div>
          <StarIcon className="h-6" />
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
