import React from 'react'

export default function SearchBar({value , onChange}) {
  return (
     <div className="search-box">
          <input type="text" placeholder="Search user..." value={value} onChange={(event)=> onChange(event.target.value)}/>
        </div>
  )
}
