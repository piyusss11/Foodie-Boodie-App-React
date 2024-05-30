import React from "react";
import Filters from "./Filters";
import Search from "./search";
const ShimmerCard = () => {
  return (
    <div className="bg-white res-card w-56 h-80 rounded-xl dark:bg-yellow-400  ">
      <div className="bg-gray-200  px-3 pt-2 h-1/2 rounded-xl  "></div>
      <div className=" mt-6 w-3/4 border-b-[18px] border-gray-300 "></div>
      <div className="mt-6 w-2/3 border-b-[10px] border-gray-200"></div>
      <div className="mt-6  w-1/3  border-b-[10px] border-yellow-500"></div>
      <div className="mt-6 w-1/3 border-b-[10px] border-gray-200"></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="">
      <div className="filters mt-8 flex justify-between mx-20">
        <div className="filter-btn flex gap-6 ">
          <Filters filtername="Top Rated" />
          <Filters filtername="Delivery Time" />
          <Filters filtername="Reset" />
        </div>
        <Search />
      </div>
      <div className="flex gap-8 mx-20 mt-8 justify-center flex-wrap">
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
      </div>
    </div>
  );
};

export default Shimmer;
