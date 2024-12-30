'use client'

import { useState } from 'react'

export default function AccordionButtons ({ gradeName, classes }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="w-60 border-[#BFBFBF] border rounded-md overflow-hidden ">
      <button 
        onClick={toggleExpand}
        className="w-full flex justify-start items-center rounded-none p-2 "
        variant="ghost"
      >
        <span className="text-xs font-semibold " >{gradeName}</span>
      </button>
      
      <div 
        className={`transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {classes.map((oneClass, i) => (
          <button key={i} variant="ghost" className="w-full flex justify-start items-center rounded-none text-xs font-semibold p-2 ">{oneClass}</button>
        ))}
      </div>
    </div>
  )
}