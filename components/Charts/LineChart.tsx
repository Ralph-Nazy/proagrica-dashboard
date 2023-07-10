import React, { useState } from "react";
import { RiSettings2Line, RiMore2Fill } from "react-icons/ri";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
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
const LineCharts: React.FC<SalesReportProps> = ({ data }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [timePeriod, setTimePeriod] = useState("Monthly");

  const [chartData, setChartData] = useState<SalesReportData[]>(data);

  //Function to control time period change by passing a selected period
  const handleTimePeriodChange = (selectedPeriod: string) => {
    setTimePeriod(selectedPeriod);
    setShowOptions(false);
  };

  //Control the diplaying of time periods ina dropdown
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  // Function to filter data based on time period default is Monthly
  const filterDataByTimePeriod = () => {
    let filteredData: SalesReportData[] = [];

    //Time period in a switch statement
    switch (timePeriod) {
      case "Monthly":
        filteredData = chartData.slice(-12);
        break;
      case "Weekly":
        filteredData = chartData.slice(-7);
        break;
      case "Yearly":
        filteredData = chartData;
        break;
      default:
        break;
    }

    return filteredData;
  };

  const filteredChartData = filterDataByTimePeriod();

  return (
    <div className="bg-white border-[1px] border-[#e5e7eb] shadow-md h-fit p-5 rounded-[6px]">
      <div className="relative flex items-center justify-between mb-4">
        <div className="time-period-selector">
          <h2 className="font-[600] text-[22px] leading-[32px]  text-gray-600 ">
            LineChart
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
                onClick={() => handleTimePeriodChange("Monthly")}
              >
                Monthly
              </div>
              <div
                className="cursor-pointer"
                onClick={() => handleTimePeriodChange("Weekly")}
              >
                Weekly
              </div>
              <div
                className="cursor-pointer"
                onClick={() => handleTimePeriodChange("Yearly")}
              >
                Yearly
              </div>
            </div>
          )}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={filteredChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" />
          <Line type="monotone" dataKey="orders" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default LineCharts;
