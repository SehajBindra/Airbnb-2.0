import React from "react";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div>
      <div className="relative h-24 w-40">
        <Image objectFit="cover" layout="fill" src={img} />
      </div>
    </div>
  );
}

export default InfoCard;
