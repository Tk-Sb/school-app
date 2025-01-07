'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { FiEdit, FiMoreVertical, FiPlus, FiTrash2 } from "react-icons/fi"
import { useCallback, useState } from 'react'
import DrawerButton from "./drawer-button"
import { EditGradeNameForm, NewClassForm } from "./forms"

export default function AccordionButton ({ grade }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="w-60 border-[#BFBFBF] border rounded-md cursor-pointer ">
      <div className="w-full h-fit flex justify-start items-center gap-2 p-2 " variant="ghost" >
        <DropdownButton id={grade.id} baseValue={grade.name} ></DropdownButton>
        <div onClick={toggleExpand} className="w-full text-xs font-semibold " >
          {grade.name}
        </div>
      </div>

      {isExpanded &&
        grade.classes.map(oneClass => (
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

function DropdownButton ({ id, baseValue }) {
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
          <DrawerButton form={<NewClassForm id={id} ></NewClassForm>} header={"إضافة شعبة جديدة"} >
            <DropdownMenuItem onSelect={preventClose} className={"flex justify-between "}>
                <div className="w-full h-fit flex justify-between gap-1" >
                  <FiPlus size={"16px"}></FiPlus>
                  إضافة
                </div>
            </DropdownMenuItem>
          </DrawerButton>
          <DrawerButton form={<EditGradeNameForm id={id} value={baseValue} ></EditGradeNameForm>} header={"تعديل الاسم"} >
            <DropdownMenuItem onSelect={preventClose} className={"flex justify-between "}>
              <div className="w-full h-fit flex justify-between gap-1" >
                <FiEdit size={"16px"}></FiEdit>
                تعديل
              </div>
            </DropdownMenuItem>
          </DrawerButton>
          <DropdownMenuItem className={"flex justify-between "}>
            <FiTrash2></FiTrash2>
            حذف
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}