import Card from "@/components/ui/card";
import React from "react";

const ProjectsList = () => {
  return (
    <div className="grid grid-cols-3 gap-10 ">
      {Array.from({ length: 8 }).map((_, i) => (
        <Card key={i} />
      ))}
    </div>
  );
};

export default ProjectsList;
