"use client";
import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import SideBar from "./sideBar";
import { usePathname } from "next/navigation";
import HeaderTab from "./headerTab";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <main className="container">
      <div className="bg-[#011627] rounded-lg border border-[#1E2D3D] flex flex-col main-wrap">
        <Header />

        {isHome ? (
          children
        ) : (
          <div className="grid grid-cols-[311px_1fr] flex-grow h-full">
            <SideBar pathname={pathname} />
            <div>
              <HeaderTab title={pathname.split("/")[1] || ""} />
              <div className="overflow-auto scroll-style" style={{height:"calc(100vh - 240px)"}}>
                {children}
              </div>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </main>
  );
};

export default MainLayout;
