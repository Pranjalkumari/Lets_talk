import React from 'react';


import Sbar from './Sbar'
import Messagecontainer from './Messagecontainer';


 


export const Homepage = () => {
  return (
    <div className='flex sm:h-[450px] md:h-550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 justify-center items-start' >
      <Sbar/>
      <Messagecontainer/>

    </div>
  );
};

