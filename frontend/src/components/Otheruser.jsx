import React from 'react'

const Otheruser = () => {
  return (

    <div >
        <div className='flex gap-2 items-center text-zinc-200 hover:text-zinc-800 hover:bg-zinc-200 rounded p-2 cursor-pointer'>
            <div className='avatar online'>
                <div className=' w-12 rounded-full'>
                  <img src="https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783_1280.png " alt="" />
                </div>
            </div>
            <div className='flex justify-between gap-2'>
              <p>Prerna rai</p>
            </div>
        </div>
        <div className='divider my-0 py-0 h-1'> </div>
    </div>
  )
}

export default Otheruser