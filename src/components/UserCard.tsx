import React from 'react';
import Image from 'next/image';
export default function UserCard({type}: {type}) {
    function numski(){
        return Math.floor(Math.random() * 10000)
    }
  return (
    <div className='p-4 rounded-2xl odd:bg-ethemPurple even:bg-ethemSky flex-1'>
        <div className='flex justify-between items-center gap-2'>
            <span className='text-[10px] bg-white px-2 py-1 rounded-full text-green-600 '>2025/26</span>
            <Image src='/more.png' alt='' width={20} height={20} />
        </div>
        <h1 className='text-2xl font-semi-bold my-4'>{numski()}</h1>
        <h2 className='capitalize text-sm font-medium text-gray-500'>{type}s</h2>
        
    </div>
  )
}
