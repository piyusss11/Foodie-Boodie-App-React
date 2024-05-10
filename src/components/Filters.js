import React from "react";

function Filters(props) {
  let filtername = props.filtername
  let clicky = props.clicky
  return (
  
      <button onClick={clicky} className="w-32 py-1  border-2 rounded-3xl  text-xs active:text-white active:bg-yellow-500">
        {filtername}
      </button>
      
   
  );
}

export default Filters;
