"use client";
import React from "react";
import Login from "./login";
import Layout from "../components/user/Layout/Layout";

const page = () => {
  return (
    <div>
      <Layout children={<Login />}></Layout>
    </div>
  );
};

export default page;
