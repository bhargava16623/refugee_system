import React from 'react'
import Sidebar from '../components/comps/Sidebar'

export const Bank = () => {
  return (
    <>
     <section>
        <div className='grid grid-cols-12 -mt-6'>
            <div className='col-span-3 bg-white h-screen p1-2 border-r-4 border-black'><Sidebar/></div>
            

            <div className='col-span-9 bg-green-500 h-screen p1-2'></div>
        
        </div>
  </section>
    </>
  )
}
