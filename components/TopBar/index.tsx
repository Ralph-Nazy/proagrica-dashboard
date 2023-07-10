import React, { useEffect } from "react";
import { RiMenuFill } from "react-icons/ri";
import { useStateContext } from "../../contexts/ContextProvider";

const TopBar: React.FC<{}> = () => {
  const { activeMenu, setActiveMenu, setScreenSize, screenSize } =
    useStateContext();

  //we need to control the screen size here
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //Based on the screen size we need to hide the sidebar if the screen size if = or less than 900px
  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between bg-white z-[5] p-5 relative shadow-[0 1px 2px 0 rgb(0 0 0 / 0.05)]">
      <div onClick={handleActiveMenu} className="cursor-pointer">
        <RiMenuFill />
      </div>
      <div className="flex"></div>
    </div>
  );
};
export default TopBar;
