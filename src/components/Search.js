import React from "react";

function Search() {
  return (
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
  );
}

export default Search;