import React from "react";

function TabSection({ src, name }) {
  return (
    <div className="flex items-center space-x-4 flex-col sm:flex-row overflow-hidden ">
      <div>
        <img className="h-5 object-cover  " src={src} alt="" />
      </div>

      <div>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default TabSection;
