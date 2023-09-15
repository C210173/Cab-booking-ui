"use client";
import React from "react";
import Layout from "../components/user/Layout/Layout";
import Rides from "./Rides";

const page = () => {
  return (
    <div>
      <Layout children={<Rides />} />
    </div>
  );
};

export default page;
