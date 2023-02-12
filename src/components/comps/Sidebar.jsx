import React from 'react'
import { SidebarData } from './SidebarData'


export default function Sidebar() {
  return (
       <React.Fragment>
        <section>
          <div class='text-white'>
            {
              SidebarData.map((item,index)=>
                {
                  return(
                    <div key={index}>
                      <div className='hover:bg-blue-500 pl-5 mt-7 w-full h-14 flex justify-start items-center text-black text-2x1 space-x-1 font-bold'>
                        <span>{item.title}</span>
                      </div>
                    </div>
                  )
                }
              )
            }
          </div>
        </section>
       </React.Fragment>
  )
}
