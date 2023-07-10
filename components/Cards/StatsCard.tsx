import React from "react";

interface CardData {
    title: string
    total: number
}

interface CardProps {
    list: CardData[]
}

const StatsCard: React.FC<CardProps> =({list})=> {

    return(
        <>
            {list.map((item, index) =>(
                <div key={index} className='bg-white border-[1px] border-[#e5e7eb] shadow-md h-fit p-5 rounded-[6px]'>
                <h2 className="text-gray-500 font-[400] text-base">{item.title}</h2>
                <p className="font-[600] text-[20px] leading-[32px]  text-gray-600 ">{item.total}</p>
            </div>
            ))}
        </>
        
    )
}
export default StatsCard;