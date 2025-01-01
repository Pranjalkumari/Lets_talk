import React from 'react'
import Otheruser from './Otheruser'
import useGetOtherUsers from '../hooks/useGetOtherUsers'

const Manyusers = () => {

  useGetOtherUsers();
  return (
    <div className='overflow-auto'   style={{ maxHeight: '300px' }}>
        <Otheruser/>
        <Otheruser/>
        <Otheruser/>
        <Otheruser/>
        <Otheruser/>
        <Otheruser/>
        <Otheruser/>
        <Otheruser/>

    </div>
  )
}

export default Manyusers