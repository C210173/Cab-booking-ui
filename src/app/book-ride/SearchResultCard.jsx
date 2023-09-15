"use client";

import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const SearchResultCard = ({
  item,
  latitude_key,
  longitude_key,
  setActiveField,
  area_key,
}) => {
  const pickup_latitude = 19.0785451;
  const pickup_longitude = 72.0878176;
  const pickup_area = "Mumbai, mumbai suburban, India";
  const destination_latitude = 42.278101;
  const destination_longitude = -749159946;
  const destination_area = "Village, Delhi, New York, US States";

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const handleSelect = () => {
    const params = new URLSearchParams(searchParams);
    params.set([latitude_key], pickup_latitude);
    params.set([longitude_key], pickup_longitude);
    params.set([area_key], pickup_area);

    router.replace(pathname + "?" + params.toString());
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
