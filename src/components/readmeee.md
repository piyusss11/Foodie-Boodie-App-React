import React, { useEffect, useState } from "react";

function filterList(list, tab) {
  if (tab === "Top Rated") {
    //filter logic
    // return list.filter(//filterlogic)
  } else if (tab === "Delivery tieme") {
    //filter logic
    // return list.filter(//filterlogic)
  } else {
    return list;
  }
}

function Extra() {
  const [list, setList] = useState([]);
  const [tab, setTab] = useState("all");
  useEffect(() => {
    //api call
  }, []);

  return <div>{
    filterList(list,tab).ma

    
    frontend repo:
- components
- pages
- utils / services
- store (state)
- hooks

shadcn
Material UI