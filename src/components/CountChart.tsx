'use client';

import Image from 'next/image';
import React from 'react'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

function numski(){
  return Math.floor(Math.random() * 100);
}

let result = numski();

export default function CountChart() {
    const data = [
  {
    name: 'Total',
    count: 100,
    fill: 'white',
  },
  {
    name: 'Girls',
    count: 100-result,
    fill: '#8884d8',
  },
  {
    name: 'Boys',
    count: result,
    fill: '#00fbffff',
  }
  
];


  return (
    <div className='bg-white rounded-xl h-full w-full p-4'>
        {/* Title */}
        <div className='flex justify-between items-center'>
          <h1 className="text-lg font-semibold">Students</h1>
          <Image src='/moreDark.png' alt='' width={20} height={20} />
        </div>

        {/* Chart */}
        <div className=' relative w-full h-[75%]'>
                <ResponsiveContainer>
                  <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                    <RadialBar
                      
                      background
                      dataKey="count"
                      />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src='/maleFemale.png' alt='' width={50} height={50} /> 
        </div>

        {/* Bottom */}
        <div className='flex justify-center gap-16'>
          <div className='flex flex-col gap-1'>
            <div className='bg-ethemSky w-5 h-5 rounded-full'></div>
            <h1 className='font-bold'>{result}</h1>
            <h2 className='text-xs text-gray-400'>Men (55%)</h2>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='bg-ethemPurple w-5 h-5 rounded-full'></div>
            <h1 className='font-bold'>{(100-result)}</h1>
            <h2 className='text-xs text-gray-400'>Women (55%)</h2>
          </div>
       
        </div>
    </div>
  )
}
