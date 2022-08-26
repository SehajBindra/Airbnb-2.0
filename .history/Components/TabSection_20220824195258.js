import React from "react";

function TabSection({ src, name }) {
  return (
    <div>
      <div>
        <img className="h-5" src={src} alt="" />
      </div>

      <div>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default TabSection;
