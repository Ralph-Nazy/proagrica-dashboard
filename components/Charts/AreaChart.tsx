import { ProjectData } from "@/types"; 
import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";



interface ProjectProps {
  data: ProjectData[];
};
const AreaCharts: React.FC<ProjectProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorProj" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorEmp" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          data-testid="project"
          type="monotone"
          dataKey="projects"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorProj)"
        />
        <Area
          type="monotone"
          dataKey="employees"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorEmp)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaCharts;
