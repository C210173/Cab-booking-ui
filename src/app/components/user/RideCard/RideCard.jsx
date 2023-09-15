"use client";
import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";

const RideCard = () => {
  return (
    <div
      //   onClick={() => router.push(`/ride-detail/${ride.id}`)}
      className="flex justify-between items-center shadow-md rounded-s-sm p-3 cursor-pointer"
    >
      <div className="flex items-center">
        <img
          className="w-20 h-20"
          src="https://upload.wikimedia.org/wikipedia/commons/a/aa/VinFast_LUX_A2.0_on_display.jpg"
          alt=""
        />
        <div className="ml-5 space-y-1">
          <p className="text-sm font-semibold">Today 10:00 PM</p>
          <p className="text-xs font-semibold opacity-60">cab KSLW9980</p>
          <p className="opacity-60 text-xs">tokyo ueno koen</p>
          <p className="opacity-60 text-xs">{"hokkaido"}</p>
        </div>
      </div>
      {true ? (
        <div>
          <VerifiedIcon className="text-green-800 text-4xl" fontSize="3rem" />
        </div>
      ) : (
        <div className="flex flex-col justify-between pl-5">
          <p className="text-green-500 mb-5">Scedule..</p>
          <Avatar
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/a/aa/VinFast_LUX_A2.0_on_display.jpg"
          />
        </div>
      )}
    </div>
  );
};

export default RideCard;
