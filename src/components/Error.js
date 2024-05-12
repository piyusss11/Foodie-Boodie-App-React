import React from "react";
import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError()
    console.log(err);
    
    return(
        <>
        <h1>
           Opps something wrong
        </h1>
        <h1>{err.status}:{err.statusText}</h1>
        </>
    )
}
export default Error