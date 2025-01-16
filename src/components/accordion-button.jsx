'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { FiEdit, FiMoreVertical, FiPlus, FiTrash2 } from "react-icons/fi"
import { useCallback, useState } from 'react'
import { DeleteWarning, EditGradeAndClassNameForm, NewClassForm } from "./forms"
import DialogForm from "./dialog-form"

export default function AccordionButton ({ grade }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="w-60 border-[#BFBFBF] border-[3px] rounded-lg cursor-pointer ">
      <div className="w-full h-fit flex justify-start items-center px-2 gap-2 " >
        <DropdownButton id={grade.id} baseValue={grade.name} subKey={false} ></DropdownButton>
        <div onClick={() => setIsExpanded(!isExpanded)} className="w-full text-xs font-semibold select-none py-2 " >
          {grade.name}
        </div>
      </div>

      {isExpanded &&
        grade.classes.map(cls => (
          <div key={cls.id} className="w-full h-fit flex justify-start items-center px-2 gap-2">
            <DropdownButton id={cls.id} baseValue={cls.name} subKey={true} ></DropdownButton>
            <div className="w-full text-xs font-semibold select-none py-2" >
              {cls.name}
            </div>
          </div>
        ))
      }
    </div>
  )
}

function DropdownButton ({ id, baseValue, subKey }) {

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
          {!subKey && (
            <DialogForm form={<NewClassForm id={id} ></NewClassForm>} header={"إضافة شعبة جديدة"} >
              <DropdownMenuItem onSelect={preventClose} className={"flex justify-between "}>
                <div className="w-full h-fit flex justify-between gap-1" >
                  <FiPlus size={"16px"}></FiPlus>
                  إضافة
                </div>
              </DropdownMenuItem>
            </DialogForm>
            )
          }
          <DialogForm form={<EditGradeAndClassNameForm id={id} value={baseValue} isClass={subKey} />} header={"تعديل الاسم"} >
            <DropdownMenuItem onSelect={preventClose} className={"flex justify-between "}>
              <div className="w-full h-fit flex justify-between gap-1" >
                <FiEdit size={"16px"}></FiEdit>
                تعديل
              </div>
            </DropdownMenuItem>
          </DialogForm>
          <DialogForm form={<DeleteWarning id={id} value={baseValue} isClass={subKey} />} header={"حذف!"} >
            <DropdownMenuItem onSelect={preventClose} className={"flex justify-between "}>
              <div className="w-full h-fit flex justify-between gap-1" >
                <FiTrash2 size={"16px"}></FiTrash2>
                حذف
              </div>
            </DropdownMenuItem>
          </DialogForm>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}