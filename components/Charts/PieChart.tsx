import React, { useState } from "react";
import { RiMore2Fill } from "react-icons/ri";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

interface SalesReportData { 
  sales: number; 
}
interface SalesReportProps {
  data: SalesReportData[];
}

const PieCharts: React.FC<SalesReportProps> = ({ data }) => {
  const [timePeriod, setTimePeriod] = useState("all");
  const [showOptions, setShowOptions] = useState(false);
  const [chartData, setChartData] = useState<SalesReportData[]>(data);

  //Function to control time period change by passing a selected period
  const handleTimePeriodChange = (period: any) => {
    setTimePeriod(period);
    setShowOptions(false);
  };

  //Control the diplaying of time periods ina dropdown
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  // Function to filter data based on time period default is 12 Months
  const filteredData =
    timePeriod === "all" ? chartData : chartData.slice(0, parseInt(timePeriod));

  const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884D8",
    "#FF6633",
  ];

  return (
    <div className="bg-white border-[1px] border-[#e5e7eb] shadow-md h-fit p-5 rounded-[6px]">
      <div className="relative flex items-center justify-between mb-4">
        <div className="time-period-selector">
          <h2 className="font-[600] text-[22px] leading-[32px]  text-gray-600 ">
            PieChart
          </h2>
        </div>
        <div className="ml-auto">
          <RiMore2Fill
            className="cursor-pointer hover:text-[#0088FE]"
            onClick={toggleOptions}
          />
          {showOptions && (
            <div className="time-period-options absolute right-0 mt-2 z-50 rounded-[6px] border-[1px] bg-white border-[#e5e7eb] p-4">
              <div
                className="cursor-pointer"
                onClick={() => handleTimePeriodChange("3")}
              >
                3 Months
              </div>
              <div
                className="cursor-pointer"
                onClick={() => handleTimePeriodChange("6")}
              >
                6 Months
              </div>
              <div
                className="cursor-pointer"
                onClick={() => handleTimePeriodChange("9")}
              >
                9 Months
              </div>
              <div
                className="cursor-pointer"
                onClick={() => handleTimePeriodChange("12")}
              >
                Year
              </div>
            </div>
          )}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            dataKey="sales"
            data={filteredData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {filteredData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>          
          <Legend />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
export default PieCharts;
