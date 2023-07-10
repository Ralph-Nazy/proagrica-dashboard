import Link from "next/link";
import React from "react";

const Footer: React.FC<{}> =()=> {
    
    const date = new Date();

    return(
        <div className="flex items-center justify-between bg-white p-5 relative shadow-[0 1px 2px 0 rgb(0 0 0 / 0.05)]">
        <div className="">
        <p className="text-gray-600 font-[400] text-[14px]">Copyright © {date.getFullYear()} Proagrica. All Rights Reserved. Powered by <Link href="https://iamralph.vercel.app" className="text-[#1e85ff]" target="_blank">Ralph Nazombe</Link></p>
        </div> 
    </div>
    )
}
export default Footer;