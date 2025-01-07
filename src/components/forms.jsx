'use client'

import { AddNewClass, AddNewGrade } from "@/actions/action"
import { useActionState, useState } from "react"
import { FiEdit, FiPlus } from "react-icons/fi"
import Button from "./ui/button"

function NewGradeForm () {
  const [state, formAction, isPending] = useActionState(AddNewGrade, null)
  
  return (
    <>
      <form action={formAction} className="w-full h-fit flex flex-col justify-center items-start gap-2 p-4 ">
        <div className="w-full h-fit flex flex-col justify-start items-start gap-2">
          <label htmlFor="name" className="text-base font-semibold ">
            اسم الصف
          </label>
          <input id="name" name="grade-name" required placeholder="اسم الصف الجديد" className="w-full h-fit p-2 text-right border-[#BFBFBF] border-[3px] rounded-lg outline-none " />
        </div>
        <Button title={'إضافة'} icon={<FiPlus></FiPlus>} ></Button>
      </form>
    </>
  )
}

function NewClassForm ({ id }) {
  const [state, formAction, isPending] = useActionState(AddNewClass, id)

  return (
    <>
      <form action={formAction} className="w-full h-fit flex flex-col justify-center items-start gap-2 p-4 ">
        <div className="w-full h-fit flex flex-col justify-start items-start gap-2">
          <label htmlFor="name" className="text-base font-semibold">
            اسم الشعبة
          </label>
          <input id="name" name="class-name" placeholder="اسم الشعبة الجديدة" className="w-full h-fit p-2 text-right border-[#BFBFBF] border-[3px] rounded-lg outline-none " />
        </div>
        <Button title={'إضافة'} icon={<FiPlus></FiPlus>} ></Button>
      </form>
    </>
  )
}

function EditGradeNameForm ({ id, value }) {
  const [state, formAction, isPending] = useActionState(AddNewClass, id)
  const [baseValue, setBaseValue] = useState(value)

  const handleChange = (event) => {
    setBaseValue(event.target.value)
  }

  return (
    <>
      <form action={formAction} className="w-full h-fit flex flex-col justify-center items-start gap-2 p-4 ">
        <div className="w-full h-fit flex flex-col justify-start items-start gap-2">
          <label htmlFor="name" className="text-base font-semibold ">
            اسم الصف
          </label>
          <input id="name" name="class-name" onChange={handleChange} value={baseValue} placeholder="اسم الصف " className="w-full h-fit p-2 text-right border-[#BFBFBF] border-[3px] rounded-lg outline-none " />
        </div>
        <Button title={'تعديل'} icon={<FiEdit></FiEdit>} ></Button>
      </form>
    </>
  )
}

export { NewGradeForm, NewClassForm, EditGradeNameForm }