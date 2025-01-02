import React from 'react'
import {assets} from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[25%] h-full p-2  flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[92%] rounded'>
            <div className='p-4 flex item-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img className='w-8' src={assets.stack_icon} alt="stack icon" />
                    <p className='font-semibold'>Your Library</p>
                </div>
                <div className='flex items-ceenter gap-3'>
                    <img className='w-5 h-5' src={assets.arrow_icon} alt="arrow icon" />
                    <img className='w-5 h-5' src={assets.plus_icon} alt="arrow icon" />
                </div>
            </div>
            <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1 pl-4">
                <h1>Create your first playlist</h1>
                <p className='font-light text-[14px]'>It's easy, we'll help you</p>
                <button className="px-4 py-1.5 bg-white text-[14px] text-black rounded-full mt-4">Create Playlist</button>
            </div>
            <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1 pl-4">
                <h1>Let's find some podcast to follow</h1>
                <p className='font-light text-[14px]'>We'll keep you updated on new episodes</p>
                <button className="px-4 py-1.5 bg-white text-[14px] text-black rounded-full mt-4">Browse podcasts</button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar