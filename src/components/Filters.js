import React from "react";

function Filters({ filtername, isActive, clicky }) {
  return (
    <button
      className={`w-32 py-1 border-2 rounded-3xl text-xs ${
        isActive
          ? "text-white bg-yellow-500"
          : "text-gray-500"
      }`}
      onClick={clicky}
    >
      {filtername}
    </button>
  );
}
export default Filters;
