import React from "react";

const AvailableCab = () => {
  return (
    <div className="flex items-center border rounded-md py-2 px-5 cursor-pointer -z-10">
      <div>
        <img
          className="w-7"
          src="https://upload.wikimedia.org/wikipedia/commons/a/aa/VinFast_LUX_A2.0_on_display.jpg"
          alt=""
        />
        <p className="font-semibold text-xs">1 min</p>
      </div>
      <div className="pl-5 text-sm">
        <p className="font-semibold">Prime SUV</p>
        <p className="text-xs -z-10">SUVs With Free wifi and top Drivers</p>
      </div>
    </div>
  );
};

export default AvailableCab;
