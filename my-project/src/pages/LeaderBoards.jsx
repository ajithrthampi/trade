import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import grid from '../assets/grid.png'
import graph from '../assets/graph.png'

import { VscHome } from 'react-icons/vsc'
import { PiLineVerticalThin } from 'react-icons/pi'
import { LuMenu } from 'react-icons/lu'
import { IoChevronDown, IoFilterOutline } from 'react-icons/io5'
import { Data_Set } from '../utils/Data'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineKeyboardBackspace } from 'react-icons/md'
import { motion } from "framer-motion"

const slipage_Data = [
    "0%",
    "0.5%",
    "1%"
]

const LeaderBoards = () => {
    const [show, setShow] = useState(false)
    const [showMenu, setShowMene] = useState(false)
    const [sliVale, setSlipValue] = useState("0%")

    //navfunction
    const showSideNavbar = () => {
        setShowMene(true)
    }

    const handleShow = () => {
        setShow(!show)
    }

    const handleData = (item) => {
        setSlipValue(item)
    }


    return (
        <>

            <main className='h-full pb-10'>
                <Navbar />
                <div className=' border-t pt-4 2xl:px-8 hidde'>
                    <div className=' xl:mx-[100px] lg:mx-[50px] md:mx-[40px] sm:mx-[20px] mx-[12px]'>
                        <div className=''>
                            <ul className=' hidden font-semibold xl:flex gap-8 2xl:text-[16px] text-[15px]'>
                                <li className='flex items-center gap-2.5'>
                                    <img className='w-4 h-4' src={grid} alt="" />
                                    <p>
                                        LeaderBoard
                                    </p>
                                </li>
                                <li>Historical Trading</li>
                                <li>Historical Chart</li>
                                <li>Scanners</li>
                                <li>Alerts</li>
                                <li>Basic Backtest</li>
                                <li>Advanced Backtest</li>
                                <li>Pricing</li>
                                <li>My Earnings</li>
                            </ul>

                            <div className='xl:hidden text-3xl cursor-pointer' onClick={showSideNavbar}>
                                <LuMenu />
                            </div>
                        </div>

                        <div className='lg:pt-14 pt-7 be-vietnam-pro-medium'>
                            <h1 className='md:text-[22px] text-[#343a40] tracking-wide'>LeaderBoard</h1>
                            <div className='flex items-center gap-0.5 pt-2'>
                                <VscHome size={20} />
                                <PiLineVerticalThin className='rotate-12' />
                                <p className='be-vietnam-pro-regular text-[#888989] text-sm'>Home</p>
                            </div>
                        </div>

                        <div className=' pt-6 flex sm:flex-row flex-col sm:items-center justify-between w-full sm:gap-0 gap-3'>
                            <p className='be-vietnam-pro-medium md:text-[26px] text-[20px] tracking-wide text-[#343a40]'>Basic Backtest</p>
                            <div className='bg-[#e9ecef border border-gray-500 md:h-10 h-9  rounded-md flex items-center px-2 sm:w-auto w-48 '>
                                <div className='be-vietnam-pro-regular  flex items-center gap-2'>
                                    <IoFilterOutline size={19} />
                                    <p className='md:text-sm text-[13px]'>Slippage</p>
                                </div>
                                <div className='border-r border-gray-500 h-full pl-2'></div>

                                <div className='w-32  cursor-pointer relative flex items-center justify-between pl-2' onClick={handleShow}>
                                    <p>{sliVale}</p>
                                    <div className='flex justify-end'>
                                        <IoChevronDown />
                                    </div>
                                    {
                                        show &&
                                        <>
                                            <div className='absolute top-8 bg-white border shadow-xl md:w-32 w-28 rounded-md'>
                                                <ul className='p-1.5'>
                                                    {
                                                        slipage_Data.map((item, index) => (
                                                            <li className='p-1 hover:bg-[#f2f4f8] rounded-md' key={index} onClick={() => handleData(item)}>{item}</li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                        <section className='bg-white border shadow-xl p-5 mt-3 rounded-xl  '>
                            <div className=' flex gap-6 justify-end items-center pb-5 be-vietnam-pro-regular'>
                                <div className=''>
                                    <p className='text-sm'>1 - 10 of 110 </p>
                                </div>
                                <div className='flex gap-4'>
                                    <button className='pl-1 border border-gray-500 rounded-lg md:h-8 md:w-8 w-7 h-7 text-2xl flex items-center justify-center hover:scale-105'> <MdKeyboardArrowLeft /></button>
                                    <button className='pl-1 border border-gray-500 rounded-lg md:h-8 md:w-8 w-7 h-7 text-2xl flex items-center justify-center hover:scale-105'> <MdKeyboardArrowRight /></button>
                                </div>
                            </div>
                            <div className=' border rounded-lg overflow-hidden h-[calc(100vh-8rem)]  overflow-y-scroll no-scrollbar'>
                                <div className="flex flex-col">
                                    <div className="-m-1.5 overflow-x-auto">
                                        <div className="p-1.5 min-w-full inline-block align-middle">
                                            <div className="overflow-hidden">
                                                <table className="min-w-full divide-y divide-gray-200 ">
                                                    <thead className='bg-[#fdf6f9] be-vietnam-pro-medium  tracking-wide'>
                                                        <tr>
                                                            <th scope="col" className="px-6 xl:py-5 py-5 text-start lg:text-[13px] text-[12px] font-medium text-gray-500 uppercase">Rank</th>
                                                            <th scope="col" className="px-6 xl:py-5 py-5 text-start lg:text-[13px] text-[12px] font-medium text-gray-500 uppercase">Name</th>
                                                            <th scope="col" className="px-6 xl:py-5 py-5 text-start lg:text-[13px] text-[12px] font-medium text-gray-500 uppercase">Calmar Ratio	</th>
                                                            <th scope="col" className="px-6 xl:py-5 py-5 text-start lg:text-[13px] text-[12px] font-medium text-gray-500 uppercase">Overall Profit	</th>
                                                            <th scope="col" className="px-6 xl:py-5 py-5 text-start lg:text-[13px] text-[12px] font-medium text-gray-500 uppercase">Avg. Daily Profit	</th>
                                                            <th scope="col" className="px-6 xl:py-5 py-5 text-start lg:text-[13px] text-[12px] font-medium text-gray-500 uppercase">Win %(Day)</th>
                                                            <th scope="col" className="px-6 xl:py-5 py-5 text-start lg:text-[13px] text-[12px] font-medium text-gray-500 uppercase">Price <span className='capitalize'>(Rs)</span></th>
                                                            <th scope="col" className="px-6 xl:py-5 py-5 text-start lg:text-[13px] text-[12px] font-medium text-gray-500 uppercase">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200 ">
                                                        {
                                                            Data_Set.map((item, index) => (
                                                                <tr className='be-vietnam-pro-medium'>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-[13px] text-gray-800">{item.rank}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-[13px] text-gray-800">{item.name}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-[13px] text-gray-800 flex gap-1 items-center">
                                                                        <img className='w-5' src={graph} alt="" />
                                                                        {item.calmer_ration}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-[13px] text-gray-800">{item.over_all}</td>

                                                                    <td className="px-6 py-4 whitespace-nowrap text-[13px] text-gray-800">{item.avg_daily_profit}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-[13px] text-gray-800">{item.win_percentge}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-[13px] text-gray-800">{item.price}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-start text-sm font-medium">
                                                                        <button type="button" className=" bg-[#0d6efd] px-2 py-1 text-[13px] text-white inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent  disabled:opacity-50 disabled:pointer-events-none">
                                                                            {item.action}
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <div className='xl:hidden block'>
                {

                    showMenu ?
                        <motion.div initial={
                            {
                                opacity: 0,
                                x: 200
                            }
                        }
                            animate={
                                {
                                    opacity: 1,
                                    x: 0
                                }
                            }
                            exit={
                                {
                                    opacity: 0,
                                    x: 200
                                }
                            }
                            className='w-[300px] md:w-[400px] h-screen bg-white drop-shadow-md flex flex-col fixed top-0 right-0 z-[101]'>
                            <div className='w-full   cursor-pointer p-8'>

                                <div className='flex'>
                                    <MdOutlineKeyboardBackspace className=" text-textColor text-xl text-slate-500 cursor-pointer flex justify-end" onClick={() => setShowMene(false)} />
                                </div>

                                <div className=' pt-4'>
                                    <ul className=' xl:hidden font-semibold flex flex-col gap-4 2xl:text-[16px] text-[15px]'>
                                        <li className='flex items-center gap-2.5 border-b'>
                                            <img className='w-4 h-4' src={grid} alt="" />
                                            <p>LeaderBoard</p>
                                        </li>
                                        <li className=' border-b'>Historical Trading</li>
                                        <li className=' border-b'>Historical Chart</li>
                                        <li className=' border-b'>Scanners</li>
                                        <li className=' border-b'>Alerts</li>
                                        <li className=' border-b'>Basic Backtest</li>
                                        <li className=' border-b'>Advanced Backtest</li>
                                        <li className=' border-b'>Pricing</li>
                                        <li className=' border-b'>My Earnings</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        :
                        <>
                        </>
                }
            </div>

        </>
    )
}

export default LeaderBoards