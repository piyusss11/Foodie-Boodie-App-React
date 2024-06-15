import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "./constants";

const useRestaurantCard = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await fetch(RESTAURANT_URL);
      const json = await data.json();
      const resto =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      // const resto = json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
      // ?.restaurants;
      setList(resto);
    //   console.log(resto);
    } catch (error) {
      setList([]);
    } finally {
      setLoading(false);
    }
  };
  return list;
};
export default useRestaurantCard;
