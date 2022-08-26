import Image from "next/image";
import React from "react";

function SmallCard({ img, distance, location }) {
  return (
    <div>
      {/* left */}
      <div>
        <Image src={img} layout="fill" />
      </div>
    </div>
  );
}

export default SmallCard;
