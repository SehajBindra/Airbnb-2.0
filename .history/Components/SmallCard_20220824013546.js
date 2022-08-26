import Image from "next/image";
import React from "react";

function SmallCard({ img, distance, location }) {
  return (
    <div>
      {/* left */}
      <div className="relative h-16 w-16 ">
        <Image className="rounded-lg" src={img} layout="fill" />
      </div>

      {/* right */}
      <h2></h2>
      <h3></h3>
    </div>
  );
}

export default SmallCard;
