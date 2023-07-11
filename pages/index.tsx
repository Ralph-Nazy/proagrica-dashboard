import {
  StatsCard,
  LineCharts,
  PieCharts,
  BarCharts,
  ProjectOverview,
  Loader,
  DashboardList,
  BreadCrumb,
} from "../components";
import React, { useEffect, useState } from "react";
import { saleStarts, saleChart, pieChart, barChart } from "../data";

const Dashboard: React.FC<{}> = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // add a delay of 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container mx-auto">
          <BreadCrumb title="Dashboard" />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <StatsCard list={saleStarts} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 my-4">
            <div className="lg:col-span-5">
              <PieCharts data={pieChart} />
            </div>
            <div className="lg:col-span-7">
              <LineCharts data={saleChart} />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
            <ProjectOverview />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 my-4 gap-4">
            <BarCharts data={barChart} />
            <DashboardList />
          </div>
        </div>
      )}
    </>
  );
};
export default Dashboard;
