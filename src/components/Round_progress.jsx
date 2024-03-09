import React from 'react'

function Round_progress({colour,value}) {
  return (
    <div>
        <div className="w-max relative m-5">
          <div className={`bg-white rounded-full p-1 border-2 border-green-500`}>
            <div className={`bg-${colour} p-3 rounded-full`}>
              <div className="bg-white rounded-full w-20 h-20 flex flex-col justify-center items-center">
                <p className="text-black  text-2xl font-bold" >{value}</p>
                <p className="text-slate-500 font-medium smaller-text">PM 2.5</p>

              </div>
            </div>
          </div>
          <div className="absolute top-1/2 right-[-3px]">
            <div className={`bg-${colour} rounded-full p-[1px] border-2 border-${colour}`}>
              <div className=" bg-white p-[2px] rounded-full">
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-[-3px]">
          <div className={`bg-${colour} rounded-full p-[1px] border-2 border-${colour}`}>
              <div className=" bg-white p-[2px] rounded-full">
              </div>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Round_progress
