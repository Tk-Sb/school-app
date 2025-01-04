'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { FiEdit, FiMoreVertical, FiPlus, FiTrash2 } from "react-icons/fi"
import { useCallback, useState } from 'react'
import DrawerButton from "./drawer-button"

export default function AccordionButton ({ gradeName, classes }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="w-60 border-[#BFBFBF] border rounded-md cursor-pointer ">
      <div className="w-full h-fit flex justify-start items-center gap-2 p-2 " variant="ghost" >
        <DropdownButton></DropdownButton>
        <div onClick={toggleExpand} className="w-full text-xs font-semibold " >
          {gradeName}
        </div>
      </div>

      {isExpanded &&
        classes.map(oneClass => (
          <div key={oneClass.id} className="w-full h-fit flex justify-start items-center gap-2 p-2 " variant="ghost">
            <DropdownButton></DropdownButton>
            <div className="text-xs font-semibold " >
              {oneClass.name}
            </div>
          </div>
        ))
      }
    </div>
  )
}

function DropdownButton () {
  const preventClose = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="outline-none ">
          <div className="w-4 h-4 ">
            <FiMoreVertical color="#7164FA" ></FiMoreVertical>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={preventClose} className={"flex justify-between "}>
            <DrawerButton>
              <button className="w-full h-fit flex justify-between gap-1" >
                <FiPlus size={"16px"}></FiPlus>
                إضافة
              </button>
            </DrawerButton>
          </DropdownMenuItem>
          <DropdownMenuItem className={"flex justify-between "}>
            <FiEdit></FiEdit>
            تعديل
          </DropdownMenuItem>
          <DropdownMenuItem className={"flex justify-between "}>
            <FiTrash2></FiTrash2>
            حذف
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}