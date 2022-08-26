import Image from "next/image";
import React from "react";

function MediumCard({ img, title }) {
  return (
    <div>
      <div className="relative h-80 w-80 ">
        <Image className="rounded-lg" layout="fill" src={img} />
      </div>

      <h3>{title}</h3>
    </div>
  );
}

export default MediumCard;
