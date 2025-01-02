import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate= useNavigate()
  return (
    <>
        <div className="w-full flex justify-between item-center font-semibold">
            <div className="flex items-center gap-2">
                <img onClick={()=>navigate(-1)}className=" w-8 bg-black p-2 rounded-full cursor-pointer"src={assets.arrow_left} alt="arrow left" />
                <img onClick={()=>navigate(1)}className=" w-8 bg-black p-2 rounded-full cursor-pointer"src={assets.arrow_right} alt="arrow right" />
            </div>
            <div className="flex items-center gap-4">
                <p className="bg-white text-black text-[15px] px-4 py-1 rounded-full hidden md:block cursor-pointer">Explore Premium</p>
                <p className="bg-black py-1 px-3 rounded-full text-[15px] cursor-pointer">Install App</p>
                <p className="bg-[#00AE8D] text-black w-7 h-7 rounded-full flex justify-center items-center cursor-pointer">K</p>
            </div>
        </div>
    </>
  )
}
export default Navbar