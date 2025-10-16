import Image from "next/image";
import React from "react";
import notFound from "../../public/images/404.png";
const NotFound = () => {
  return (
    <section className="h-[80vh] flex items-center">
      <div>
        <Image alt="" src={notFound} width={312} height={180} />
      </div>
      <div>
        
      </div>
    </section>
  );
};

export default NotFound;
