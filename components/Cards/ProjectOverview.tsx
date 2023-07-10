import React from "react";
import { projectOverview } from "../../data";
import { AreaCharts, ProjectOverviewItems } from "..";

const ProjectOverview: React.FC<{}> = () => {
  return (
    <div className="bg-white border-[1px] border-[#e5e7eb] shadow-md h-fit p-5 rounded-[6px]">
      <h2 className="font-[600] text-[22px] leading-[32px]  text-gray-600 mb-4">
        Project Overview
      </h2>
      <div className="grid lg:grid-cols-2 items-center gap-4">
        <div className="lg:order-1 order-2">
          <ProjectOverviewItems list={projectOverview} />
        </div>
        <div className="lg:order-2 order-1">
          <AreaCharts data={projectOverview} />
        </div>
      </div>
    </div>
  );
};
export default ProjectOverview;
