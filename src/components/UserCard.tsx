import React from 'react';
import Image from 'next/image';
export default function UserCard({type}: {type}) {
  return (
    <div className='p-4 rounded-2xl odd:bg-ethemPurple even:bg-ethemSky flex-1'>
        <div className='flex justify-between'>
            <span>2025/26</span>
            <Image src='/more.png' alt='' width={20} height={20} />
        </div>
        <h1>235832</h1>
        <h2 className='text-xs text-gray-500'>{type.name}</h2>
        
    </div>
  )
}
