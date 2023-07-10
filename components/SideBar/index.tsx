import React from "react"; 
import { MdOutlineCancel } from 'react-icons/md';
import { RiHome4Line } from 'react-icons/ri';
import { links } from '../../data';
import { useStateContext } from "../../contexts/ContextProvider"
import Link from "next/link";

const SideBar: React.FC<{}> =()=> {
  //Using context API so that we can use across the application
    const { activeMenu, setActiveMenu, screenSize } = useStateContext();
    
    //function to control the opening and closing of sidebar
    const handleCloseSideBar = () => {
        if (activeMenu !== undefined && screenSize <= 900) {
          setActiveMenu(false);
        }
      };
      
    return(
        <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link href="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold text-slate-900">
              <RiHome4Line /> <span>Proagrica</span>
            </Link>
            <div content="Menu" className="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)} 
                className="text-xl rounded-full p-3 mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </div>
          </div>
          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 text-[15px] m-3 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <Link
                    href={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar} 
                    className="flex items-center gap-5 rounded-lg text-md text-gray-700 m-2"
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </>
      )} 
    </div>
    )
}
export default SideBar;