import React from 'react'
import { FiAlignJustify } from "react-icons/fi";
import images from '../asset/images/youtube.jpg'
import { IoSearchOutline } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { PiVideoCamera } from "react-icons/pi";
import { GoBell } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
    return (
        <div className='w-full flex justify-between text-center h-20 px-3'>
            <div className='w-3/12 flex items-center space-x-3 '>
                <FiAlignJustify className='text-2xl' />
                <img className='w-20 h-16' src={images} />
            </div>
            <div className='w-6/12 flex space-x-5 '>
                <div className='flex text-center items-center  w-3/4 '>
                    <input className='w-96 border h-10 rounded-l-full p-2 flex-1 outline-none ' type='text' placeholder='Ara....' />
                    <div className=' bg-gray-300 h-10 w-10 text-lg pt-3 pl-3 rounded-r-full'>
                        <IoSearchOutline />
                    </div>
                </div>
                <FaMicrophone className='text-3xl p-1 my-6 bg-gray-200 rounded-full ' />
            </div>
            <div className='w-3/12 flex text-center items-center text-2xl space-x-5 justify-end'>
                <PiVideoCamera />
                <GoBell />
                <CgProfile />
            </div>
        </div>
    )
}

export default Navbar
