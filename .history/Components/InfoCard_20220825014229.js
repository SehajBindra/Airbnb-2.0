import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex py-7 px-2 border-b pr-4 cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out">
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

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" /> {star}
          </p>

          <div>
            <p className="pb-2 font-semibold text-lg lg:text-2xl"> {price} </p>
            <p className="text-right font-extralight"> {total} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
