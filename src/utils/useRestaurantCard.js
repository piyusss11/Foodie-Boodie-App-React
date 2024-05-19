import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "./constants";

const useRestaurantCard = () => {
    const[list,setList]=useState([])
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async ()=>{
        const data = await fetch(RESTAURANT_URL)
        const json = await data.json()
        const resto = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
        setList(resto)
        console.log(resto);
        
    }
    return list
};
export default useRestaurantCard;
