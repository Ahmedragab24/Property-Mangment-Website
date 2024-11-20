import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ProjectsSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-36 lg:h-64 rounded-xl" />
      <div className="flex flex-col items-center space-y-2">
        <Skeleton className="h-4 w-[90%]" />
        <Skeleton className="h-4 w-[90%]" />
      </div>
    </div>
  );
};

export default ProjectsSkeleton;
