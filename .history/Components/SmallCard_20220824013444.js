import Image from "next/image";
import React from "react";

function SmallCard({ img, distance, location }) {
  return (
    <div>
      {/* left */}
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" />
      </div>
    </div>
  );
}

export default SmallCard;
