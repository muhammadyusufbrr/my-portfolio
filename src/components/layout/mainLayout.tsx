import React from "react";
import Header from "./header";
import Footer from "./footer";

const MainLayout = ({ children }) => {
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
