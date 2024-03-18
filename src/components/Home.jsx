import React from 'react'
import Round_progress from './Round_progress'
import {
  Row,
} from "reactstrap";

function Home() {
  return (
    <div>
      <div className="w-20 h-20">
        
      </div>
        <Row className="flex p-5 justify-center w-full"> 
        <Round_progress colour = "bg-green-400" border="border-green-400"  value="01"/>
        <Round_progress colour = "bg-blue-400" border="border-blue-400"  value="02"/>
        <Round_progress colour = "bg-yellow-400" border="border-yellow-400"  value="03"/>
        <Round_progress colour = "bg-red-400" border="border-red-400"  value="08"/>
        <Round_progress colour = "bg-purple-400" border="border-purple-400"  value="09"/>
       
        </Row>
    </div>
 
  )
}

export default Home
