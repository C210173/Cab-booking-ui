import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const SearchResultCard = () => {
  const handleSelect = () => {
    console.log();
  };
  return (
    <div
      onClick={handleSelect}
      className="flex items-center py-2 z-10 bg-white cursor-pointer"
    >
      <div className="pr-5">
        <LocationOnIcon />
      </div>
      <div>
        <p className="font-semibold">tokyo</p>
        <p className="font-semibold opacity-60">tokyo</p>
      </div>
    </div>
  );
};

export default SearchResultCard;
