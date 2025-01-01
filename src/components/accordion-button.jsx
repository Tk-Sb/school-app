'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from 'react'
import { FiMoreVertical } from "react-icons/fi"

export default function AccordionButton ({ gradeName, classes }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="w-60 border-[#BFBFBF] border rounded-md cursor-pointer ">
      <div onClick={toggleExpand} className="w-full h-fit flex justify-start items-center gap-2 p-2 " variant="ghost" >
        <DropdownButton></DropdownButton>
        <div className="text-xs font-semibold " >
          {gradeName}
        </div>
      </div>

      {isExpanded &&
        classes.map(oneClass => (
          <div key={oneClass.classId} className="w-full h-fit flex justify-start items-center gap-2 p-2 " variant="ghost">
            <DropdownButton></DropdownButton>
            <div className="text-xs font-semibold " >
              {oneClass.className}
            </div>
          </div>
        ))
      }
    </div>
  )
}

function DropdownButton () {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none ">
          <div className="w-4 h-4 ">
            <FiMoreVertical color="#7164FA" ></FiMoreVertical>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className={" "}>
            إضافة
          </DropdownMenuItem>
          <DropdownMenuItem>
            تعديل
          </DropdownMenuItem>
          <DropdownMenuItem>
            حذف
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}