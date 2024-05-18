import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

function UserClass() {
  const [naam, setname] = useState({});
  useEffect(() => {
    // fetchData();
    return () => {
      clearInterval(timer);
      console.log("timer unmount kardiya");
    };
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/piyusss11");
    const json = await data.json();
    console.log(json);

    setname(json);
  };
  const { name, followers, following } = naam;
  return (
    <div>
      <h1>name:{name}</h1>
      <h1>followers:{following}</h1>
    </div>
  );
}

export default UserClass;
