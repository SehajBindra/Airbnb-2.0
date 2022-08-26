import Image from "next/image";
import React from "react";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <div className="relative py-16 p-3 sm:-ml-3  cursor-pointer">
      <div className="relative h-96 m-w-[300px]">
        <Image
          objectFit="cover"
          className="rounded-2xl"
          src={img}
          layout="fill"
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p className="text-sm text-white">{description}</p>

        <button> {buttonText} </button>
      </div>
    </div>
  );
}

export default LargeCard;
