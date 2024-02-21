import React, { useState } from "react";
import JsonData from "../MOCK_DATA.json";

const SearchFilter = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {JsonData.filter((val)=>{
        return (search === "") ? val : (val.first_name.toLowerCase().includes(search.toLowerCase()))
      }).map((val) => {
        return (
          <div key={val.id} className="border">
            <span>{val.first_name}</span>
            <span>{val.last_name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SearchFilter;
