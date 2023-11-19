import React from 'react'
import { RiHome2Line } from "react-icons/ri";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { GrHistory } from "react-icons/gr";
import { PiVideoBold } from "react-icons/pi";
import { TbClockHour4 } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { PiGameController } from "react-icons/pi";

const Sidebar = () => {
    return (
        <div className='w-[370px] border-r max-h-screen flex flex-col space-y-2 text-xl text-center justify-center pl-2'>
            <div className='flex hover:bg-gray-200 rounded-full py-2 pl-1'>
                <RiHome2Line className='text-2xl pt-1' />
                <p className='text-lg'>Ana Sayfa</p>
            </div>
            <div className='flex hover:bg-gray-200 rounded-full py-2 pl-1'>
                <SiYoutubeshorts className='text-2xl  pt-1' />
                <p className='text-lg '>Shorts</p>
            </div>
            <div className='flex hover:bg-gray-200 rounded-full py-2 pl-1'>
                <MdOutlineSubscriptions className='text-2xl pt-1' />
                <p className='text-lg'>Abonelikler</p>
            </div>
            <div className='flex hover:bg-gray-200 rounded-full py-2 pl-1'>
                <GrChannel className='text-2xl pt-1' />
                <p className='text-lg'>Kanallar</p>
            </div>
            <div className='flex hover:bg-gray-200 rounded-full py-2 pl-1'>
                <GrHistory className='text-2xl pt-1' />
                <p className='text-lg'>Geçmiş</p>
            </div>
            <div className='flex hover:bg-gray-200 rounded-full py-2 pl-1'>
                <PiVideoBold className='text-2xl pt-1' />
                <p className='text-lg'>Video</p>
            </div>
            <div className='flex hover:bg-gray-200 rounded-full py-2 pl-1'>
                <TbClockHour4 className='text-2xl pt-1' />
                <p className='text-lg'>Daha Sonra İzle</p>
            </div>
            <div className='flex hover:bg-gray-200 rounded-full py-2 '>
                <IoIosArrowDown className='text-2xl pt-1' />
                <p className='text-lg'>Daha Fazla Göster</p>
            </div>
            <div className='flex hover:bg-gray-200 rounded-full py-2 pl-1'>
                <PiGameController className='text-2xl pt-1' />
                <p className='text-lg'>Oyun</p>
            </div>
        </div>
    )
}

export default Sidebar
