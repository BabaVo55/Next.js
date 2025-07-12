import React from 'react';
import UserCard from '@/components/UserCard';

export default function AdminPage() {
  return (
    <div className='p-4 border border-black flex flex-col md:flex-row'>
      {/* Left */}
      <div className=''>L
        <div className='flex gap-4 justify-between flex-wrap'>
          <UserCard type='student'/>
          <UserCard type='teacher'/>
          <UserCard type='parent'/>
          <UserCard type='staff'/>
        </div>
      </div>
      {/* Right */}
      <div className=''>R</div>
    </div>
  )
}
