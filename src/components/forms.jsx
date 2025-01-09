'use client'

import { AddNewClass, AddNewGrade, Delete, EditGradeLevelName } from "@/actions/action"
import { useActionState, useState } from "react"
import { FiEdit, FiPlus, FiTrash2, FiX } from "react-icons/fi"
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
          <input id="name" required name="grade-name" placeholder="اسم الصف الجديد" className="w-full h-fit p-2 text-right border-[#BFBFBF] border-[3px] rounded-lg outline-none " />
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
          <input id="name" required name="class-name" placeholder="اسم الشعبة الجديدة" className="w-full h-fit p-2 text-right border-[#BFBFBF] border-[3px] rounded-lg outline-none " />
        </div>
        <Button title={'إضافة'} icon={<FiPlus></FiPlus>} ></Button>
      </form>
    </>
  )
}

function EditGradeNameForm ({ id, value }) {
  const [state, formAction, isPending] = useActionState(EditGradeLevelName, id)
  const [baseValue, setBaseValue] = useState(value)

  return (
    <>
      <form action={formAction} className="w-full h-fit flex flex-col justify-center items-start gap-2 p-4 ">
        <div className="w-full h-fit flex flex-col justify-start items-start gap-2">
          <label htmlFor="name" className="text-base font-semibold ">
            اسم الصف
          </label>
          <input id="name" required name="new-grade-name" onChange={(event) => setBaseValue(event.target.value)} value={baseValue} placeholder="اسم الصف " className="w-full h-fit p-2 text-right border-[#BFBFBF] border-[3px] rounded-lg outline-none " />
        </div>
        <Button title={'تعديل'} icon={<FiEdit></FiEdit>} ></Button>
      </form>
    </>
  )
}

function DeleteWarning ({ id }) {
  const [state, formAction, isPending] = useActionState(Delete, id)

  return (
    <>
      <form action={formAction} className="w-full h-fit flex flex-col justify-center items-start gap-2 p-4 ">
        <div className="w-full h-fit flex flex-col justify-start items-start gap-2">
          <div>
            متأكد من القيام بعملية الحذف؟
          </div>
        </div>
        <div className="flex gap-2" >
          <Button title={'حذف'} icon={<FiTrash2 color="red"></FiTrash2>} textColor={"red"} borderColor={"red"} ></Button>
        </div>
      </form>
    </>
  )
}

export { NewGradeForm, NewClassForm, EditGradeNameForm, DeleteWarning }