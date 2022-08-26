import React from "react";

function TabSection({ src, name }) {
  return (
    <div>
      <img src={src} alt="" />
      <p>{name}</p>
    </div>
  );
}

export default TabSection;
