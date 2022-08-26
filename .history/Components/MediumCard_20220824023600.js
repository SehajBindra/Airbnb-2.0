import Image from "next/image";
import React from "react";

function MediumCard({ img, title }) {
  return (
    <div>
      <div className="relative h-80 w-80 ">
        <Image className="rounded-md" layout="fill" src={img} />
      </div>
    </div>
  );
}

export default MediumCard;
