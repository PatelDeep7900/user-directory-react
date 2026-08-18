import React from 'react';

export default function UserCard({user}) {
  return (
    <div className='user-card'>
       <div className='user-header'>
          <span className='user-name'>{user.name}</span>
       </div>
       <div className='card-body'>
         <span>{user.username}</span>
         <span>{user.email}</span>
         <span>{user.phone}</span>
       </div>
    </div>
  )
}
