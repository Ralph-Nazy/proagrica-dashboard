import { ProjectData } from "../types";
import React from "react";

//Creating props with data from the types interface
interface ProjectProps {
  list: ProjectData[];
}

const ProjectOverviewItems: React.FC<ProjectProps> = ({ list }) => {
  return (
    <div className="flex flex-col gap-6">
      {list.map((item, index) => (
        <div key={index} className="flex items-center">
          <div className="flex-shrink-0">
            <span className="h-10 w-10 flex justify-center items-center rounded-full bg-[#8884d8] bg-opacity-50">
              <div className="rounded-full h-4 w-4 bg-[#8884d8]"></div>
            </span>
          </div>
          <div className="flex-grow ms-3">
            <h5 className="font-semibold text-[14px]">{item.name}</h5>
            <ul className="flex items-center gap-2">
              <li className="list-inline-item text-[14px] leading-[22px]">
                <b>{item.projects}</b> Total Projects
              </li>
              <li className="list-inline-item text-[14px] leading-[22px]">
                <b>{item.employees}</b> Employees
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProjectOverviewItems;
