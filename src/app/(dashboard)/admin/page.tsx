import React from 'react';
import UserCard from '@/components/UserCard';
import CountChart from '@/components/CountChart';

export default function AdminPage() {
  return (
    <div className='p-4 flex flex-col md:flex-row '>
      {/* Left */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>L
      {/* User Cards */}
        <div className='flex gap-4 justify-between flex-wrap'>
          <UserCard type='student'/>
          <UserCard type='teacher'/>
          <UserCard type='parent'/>
          <UserCard type='staff'/>
        </div>
        {/* Middle charts */}
        <div className='flex gap-4 flex-col lg:flex-row'>
          {/* Count-Chart */}
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChart /> 
          </div>
          {/* Attendance chart */}
          <div className='w-full lg:w-2/3 h-[450px]'>

          </div>
          <div className=''>

          </div>

        </div> 
        {/* Bottom charts */}
      </div>
      {/* Right */}
      <div className='border border-black rounded-full w-full lg:w-1/3'>R</div>
    </div>
  )
}
