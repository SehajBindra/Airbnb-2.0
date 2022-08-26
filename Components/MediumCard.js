import Image from "next/image";
import React from "react";

function MediumCard({ img, title }) {
  return (
    <div>
      <div className="relative h-80 w-80 cursor-pointer hover:scale-105 transform transition duration-300 ease-out ">
        <Image className="rounded-xl" layout="fill" src={img} />
      </div>

      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
