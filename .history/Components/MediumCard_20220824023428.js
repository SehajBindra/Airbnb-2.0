import Image from "next/image";
import React from "react";

function MediumCard({ img, title }) {
  return (
    <div>
      <div className="relative">
        <Image layout="fill" src={img} />
      </div>
    </div>
  );
}

export default MediumCard;
