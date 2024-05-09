import React from "react";

const ShimmerCard = () => {
  return (
    <div className="bg-white res-card w-56 h-80 rounded-xl  ">
      <div className="bg-gray-200  px-3 pt-2 h-1/2 rounded-xl "></div>
      <div className=" mt-6 w-3/4 border-b-[18px] border-gray-300 "></div>
      <div className="mt-6 w-2/3 border-b-[10px] border-gray-200"></div>
      <div className="mt-6  w-1/3  border-b-[10px] border-yellow-500"></div>
      <div className="mt-6 w-1/3 border-b-[10px] border-gray-200"></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-end mr-20 mt-6">
        <div className="flex justify-center mt-2">
          <div className="search-container flex gap-2">
            <input
              className="p-1 border border-gray-300 rounded-lg text-sm focus:outline-none"
              type="text"
              placeholder="Search..."
            />
            <button className="bg-yellow-500 hover:bg-black hover:text-yellow-500 text-white font-bold text-sm py-1 px-2 rounded-lg">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="filters mt-4 flex justify-center ">
        <button className="filter-btn p-2 border-2 rounded-3xl  text-xs active:text-white active:bg-yellow-500">
          Top Rated
        </button>
      </div>
      <div className="flex justify-center items-center gap-8 mt-8">
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
      </div>
    </div>
  );
};

export default Shimmer;
