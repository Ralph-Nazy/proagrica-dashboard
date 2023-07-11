import React, { useEffect } from "react";
import { RiFullscreenLine, RiMenuFill, RiNotification4Line} from "react-icons/ri";
import { useStateContext } from "../../contexts/ContextProvider";
import Link from "next/link";
import Image from "next/image";

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
      <div className="flex">
      <nav className="flex items-center justify-between px-1"> 
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
      <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-[400] text-gray-600 hover:text-[#008184]"
          >
            <RiFullscreenLine className="mr-2.5" /> 
          </Link>
        </li>
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-[400] text-gray-600 hover:text-[#008184]"
          >
            <RiNotification4Line className="mr-2.5" /> 
          </Link>
        </li>
        <li>
          <div className="flex items-center">
          <Image
            className="rounded-full"
            src="/images/userImage.jpeg"
            alt="User Name"
            width="25"
            height="25"
          />
          </div>
        </li>
      </ol>
    </nav>
      </div>
    </div>
  );
};
export default TopBar;
