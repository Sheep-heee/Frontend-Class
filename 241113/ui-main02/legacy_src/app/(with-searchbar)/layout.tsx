"use client";
import React, { ReactNode } from "react";
import Searchber from "../../components/searchber";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Searchber />
      {children}
    </div>
  );
};

export default Layout;
