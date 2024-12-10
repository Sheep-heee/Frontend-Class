import Link from "next/link";
import React, { ReactNode } from "react";

const Layout = ({
  children,
  sidebar,
  feed,
}: {
  children: ReactNode;
  sidebar: ReactNode;
  feed: ReactNode;
}) => {
  return (
    <div>
      <Link href={"/parallel"}>parallel</Link>
      &nbsp;
      <Link href={"/parallel/setting"}>parallel/setting</Link>
      {sidebar}
      {children}
      {feed}
    </div>
  );
};

export default Layout;
