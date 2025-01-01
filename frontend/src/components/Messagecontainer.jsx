
import React from 'react'
import Sendinput from './Sendinput'
import Messages from './Messages'

const Messagecontainer = () => {
  return (
    <div  className='md:min-w-[550px] flex flex-col h-full max-h-screen'  >
        <div className='flex gap-2 items-center bg-zinc-500 text-white px-4 py-2 mb-2 '>
            <div className='avatar online'>
                <div className=' w-12 rounded-full'>
                  <img src="https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783_1280.png " alt="" />
                </div>
            </div>
            <div className='flex justify-between gap-2'>
              <p>Prerna rai</p>
            </div>
        </div>
        <Messages />
        <Sendinput  />
       
    </div>
  )
}

export default Messagecontainer
