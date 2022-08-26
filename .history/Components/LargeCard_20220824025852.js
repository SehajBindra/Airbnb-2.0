import Image from "next/image";
import React from "react";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <div>
      <div className="relative">
        <Image objectFit="cover" src={img} layout="fill" />
      </div>

      <div></div>
    </div>
  );
}

export default LargeCard;
