import { ProfileData } from '@/types/globalTypes'
import Image from 'next/image'
import React from 'react'

export default function Profile({data}: {data: ProfileData}) {
  console.log(data.room);
  
  return (
    <div className='py-2.5 flex items-center'>
        <div className="left pr-2 ">
            <div className='rounded-full h-12 w-12 flex justify-center items-center bg-red-500 text-sm'><p>{data.room}</p></div>
        </div>
        <div className="right h-full flex flex-col justify-center">
            <div className='font-semibold'>{data.room}</div>
            <div className='text-gray-400 text-xs'>Hallo Semuanya</div>
        </div>
    </div>
  )
}
