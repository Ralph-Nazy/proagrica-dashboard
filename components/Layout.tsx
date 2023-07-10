import React from "react";
import { SideBar, Footer, TopBar } from "./";
import { useStateContext } from "../contexts/ContextProvider";

//Layout props, as we're wrapping our application children would be anything from the pages content created with NexJs 13 we can have multiple layout define within the pages with ease
type Props = {
  children?: any;
};

const Layout: React.FC<Props> = ({ children }) => {
  const { activeMenu } = useStateContext();

  return (
    <div className="flex relative">
      <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}></div>
      {activeMenu ? (
        <div className="w-72 fixed bg-white border-r-[1px] border-r-gray-50">
          <SideBar />
        </div>
      ) : (
        <div className="w-0 fixed  bg-white">
          <SideBar />
        </div>
      )}
      <div
        className={
          activeMenu
            ? "dark:min-h-screen md:ml-72 w-full"
            : "w-full min-h-screen flex-2 "
        }
      >
        <div className="fixed md:static z-50 w-full">
          <TopBar />
        </div>
        <div className="p-5 mt-14 lg:mt-0">{children}</div>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
