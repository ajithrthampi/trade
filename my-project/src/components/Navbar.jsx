import React from 'react'
import undluke from '../assets/unfluke.png'
import coin from '../assets/coin.jpeg'
import profile from '../assets/profile.jpg'
import bell from '../assets/bell.png'
import { MdArrowDropDown } from "react-icons/md";


const Navbar = () => {
  return (
    <nav className='md:h-[94px] h-[70px] w-ful xl:mx-[100px] lg:mx-[50px] md:mx-[40px] sm:mx-[20px] mx-[12px] flex items-center pt-6 justify-between '>
      <div className=''>
        <img className='w-[118px] object-cover' src={undluke} alt="" />
      </div>

      <div className=' flex gap-5'>
        <div className='flex items-center'>
          <img className='w-[26px]' src={bell} alt="" />
          <MdArrowDropDown className='text-[#737373]' />
        </div>

        <div className='flex items-center gap-2'>
          <img className='w-[26px]' src={coin} alt="" />
          <p className='text-sm text-[#737373] font-semibold'>0</p>
        </div>

        <div className='flex items-center'>
          <img className='w-7 border rounded-full border-black' src={profile} alt="" />
          <MdArrowDropDown className='text-[#737373]' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar