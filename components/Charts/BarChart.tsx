import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

//data model for the
interface SalesReportData {
  name: string;
  sales: number;
  orders: number;
}
interface SalesReportProps {
  data: SalesReportData[];
}
const BarCharts: React.FC<SalesReportProps> = ({ data }) => {
  return (
    <div className="bg-white border-[1px] border-[#e5e7eb] shadow-md h-fit p-5 rounded-[6px]">
        <h2 className="font-[600] text-[22px] leading-[32px]  text-gray-600 mb-4">
            BarChart
          </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend className="capitalize" />
          <Bar dataKey="sales" fill="#8884d8" />
          <Bar dataKey="orders" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default BarCharts;
