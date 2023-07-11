import Link from "next/link";
import React from "react";
import { RiArrowRightSLine, RiHome4Line } from "react-icons/ri";

interface BreadCrumbProps {
    title: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({title}) => {
  return (
    <nav className="flex items-center justify-between px-1 mb-3">
      <div>
        <h1 className="text-gray-600 font-[600] capitalize">{title}</h1>
      </div>
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-[400] text-gray-600 hover:text-[#008184]"
          >
            <RiHome4Line className="mr-2.5" />
            Dashboard
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <RiArrowRightSLine className="text-gray-600 mr-2.5 text-sm" />
            <span className="inline-flex items-center text-sm font-[400] capitalize text-[#008184]">
              {title}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};
export default BreadCrumb;
