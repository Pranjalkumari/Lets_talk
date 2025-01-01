import React from 'react'
import { IoMdSearch } from "react-icons/io";

import Manyusers from './Manyusers';

const Sbar = () => {

  console.log('Rendering Sbar component');
  return (
    <div className='border-r border-slate-50 flex flex-col p-4 '>
         <form action=""className='flex items-center gap-2'>
            <input  className='input input-bordered rounded-md' 
                type="text" placeholder='search...' />
               <button type='submit' className='btn bg-zinc-500 text-white'>
               <IoMdSearch className='w-6 h-6 outline-none'/>
                </button>
        </form>
        <div className='divider px-3'></div>
       <Manyusers/>
       <div className='mt-2'>
        <button className='btn btn-sm'>Logout</button>
       </div>
    </div >
  )
}

export default Sbar