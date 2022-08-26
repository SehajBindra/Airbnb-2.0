import Image from "next/image";
import React from "react";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <div className="relative py-16 p-2 sm:-ml-3  cursor-pointer">
      <div className="relative h-96 m-w-[300px]">
        <Image
          objectFit="cover"
          className="rounded-2xl"
          src={img}
          layout="fill"
        />
      </div>

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default LargeCard;
