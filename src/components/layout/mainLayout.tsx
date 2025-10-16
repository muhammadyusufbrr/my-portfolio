import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className="container">
      <div className="bg-[#011627] rounded-lg border border-[#1E2D3D]">
        <Header />
        {children}
        <Footer />
      </div>
    </main>
  );
};

export default MainLayout;
