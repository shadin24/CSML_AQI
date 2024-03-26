import React from 'react'
import Round_progress from './Round_progress'
import Sidebar from './Sidebar'

function Home() {

  return (
    <div className='flex w-full'>
      {/* <Sidebar/> */}
    
    <div className = 'flex'>
        
        <Round_progress colour = "bg-green-500" border="border-green-500"  value="01"/>
        <Round_progress colour = "bg-blue-500" border="border-blue-500"  value="02"/>
        <Round_progress colour = "bg-yellow-500" border="border-yellow-500"  value="03"/>
        <Round_progress colour = "bg-red-500" border="border-red-500"  value="08"/>
        <Round_progress colour = "bg-purple-500" border="border-purple-500"  value="09"/>
    </div>
    </div>
  )
}

export default Home
