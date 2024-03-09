import React from 'react'
import Round_progress from './Round_progress'

function Home() {
  return (
    <div className='flex'>
        
        <Round_progress colour="green-500" value="01"/>
        <Round_progress colour="blue-500" value="02"/>
        <Round_progress colour="yellow-500" value="03"/>
        <Round_progress colour="red-500" value="08"/>
        <Round_progress colour="purple-500" value="09"/>
       
       
      
    </div>
  )
}

export default Home
