import React from 'react'
import UserCard from './UserCard'

export default function UserList({users}) {
    if (users.length === 0) {
    return <p className="message">No users found.</p>;
  }
  return (
    <div className='user-list'>
      {users.map((user) => <UserCard key={user.id} user={user}/>)}
    </div>
  )
}