import React from "react";

function TabSection({ src, name }) {
  return (
    <div>
      <img className="h-5" src={src} alt="" />
      <p>{name}</p>
    </div>
  );
}

export default TabSection;
