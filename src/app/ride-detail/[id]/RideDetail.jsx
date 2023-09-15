"use client";
import { useRouter } from "next/navigation";
import React from "react";
import WestIcon from "@mui/icons-material/West";
import { Avatar, Button, IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CallIcon from "@mui/icons-material/Call";
import KeyIcon from "@mui/icons-material/Key";

const RideDetail = () => {
  const router = useRouter();
  console.log(router);
  const goBack = () => {
    router.back();
  };
  return (
    <div>
      <div className="flex items-center px-2 lg:px-5 py-2">
        <WestIcon onClick={goBack} className="cursor-pointer" />
        <p className="text-center w-full"> ANBHDCVYDGJCX</p>
      </div>

      <div className="px-2 lg:px-5 py-5">
        <div className="border rounded-md">
          <div className="flex items-center border-b p-3">
            <span className="pr-5 opacity-70 text-xs font-semibold">
              PICKUP :
            </span>
            <span>tokyo ueno koen</span>
          </div>
          <div className="flex items-center border-b p-3">
            <span className="pr-5 opacity-70 text-xs font-semibold">
              DROP :
            </span>
            <span>mumbai india</span>
          </div>
        </div>
      </div>

      <p className="p-2 bg-green-400 text-white text-center">
        Picking arriving in 1 minute
      </p>

      <div className="flex items-center justify-center w-full h-[42vh]">
        <p className="text-center w-full">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12956.010356264482!2d139.66051554999999!3d35.72615485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2sjp!4v1694658422209!5m2!1svi!2sjp`}
            width="100%"
            height="300"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </p>
      </div>

      <div className=" px-2 lg:px-5 mt-2">
        <div className="border border-md">
          <div className="flex justify-between w-full border-b p-3">
            <div className="flex items-center">
              <Avatar
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/a/aa/VinFast_LUX_A2.0_on_display.jpg"
              />
              <div className="pl-4">
                <p>VinFast</p>
                <p className="text-sx font-semibold opacity-60">Mini cab</p>
              </div>
            </div>
            <div>
              <p className="test-xs">GJ01-28313</p>
              <p className="font-semibold">9123</p>
            </div>
          </div>

          <div className="flex justify-between w-full p-3">
            <div className="flex items-center">
              <Avatar
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/a/aa/VinFast_LUX_A2.0_on_display.jpg"
              />
              <div className="pl-4">
                <p>Khoa</p>
                <p className="text-sx flex items-center">
                  4.7 <StarIcon className="text-yellow-500 text-sm" />
                </p>
              </div>
            </div>

            <div>
              <IconButton color="success" aria-label="call driver">
                <CallIcon />
              </IconButton>
            </div>
          </div>

          {true ? (
            <Button
              variant="contained"
              color="secondary"
              sx={{
                width: "100%",
                padding: ".5rem 0rem",
              }}
            >
              Pay Now
            </Button>
          ) : (
            <div className="flex justify-between items-center bg-yellow-600 text-white py-2 px-3">
              <div className="flex items-center">
                <KeyIcon />
                <p className="ml-4">OTP</p>
              </div>
              <p>4567</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RideDetail;
