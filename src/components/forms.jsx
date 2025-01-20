'use client'

import { AddNewClass, AddNewGrade, AddNewPublicAnnouncement, DeleteClass, DeleteGrade, DeletePublicAnnouncement, EditClassName, EditGradeLevelName, EditPublicAnnouncement } from "@/actions/action"
import { useActionState, useState } from "react"
import { FiEdit, FiPlus, FiTrash2 } from "react-icons/fi"
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

function EditGradeAndClassNameForm ({ id, value, isClass }) {
  const [state, formAction, isPending] = useActionState(
    isClass ? EditClassName : EditGradeLevelName, 
    id
  )
  const [baseValue, setBaseValue] = useState(value)
  
  return (
    <>
      <form action={formAction} className="w-full h-fit flex flex-col justify-center items-start gap-2 p-4 ">
        <div className="w-full h-fit flex flex-col justify-start items-start gap-2">
          <label htmlFor="name" className="text-base font-semibold ">
            {isClass && 
              <h1>
                اسم الشعبة
              </h1>
            }
            {!isClass && 
              <h1>
                اسم الصف
              </h1>
            }
          </label>
          <input id="name" required name="new-name" onChange={(event) => setBaseValue(event.target.value)} value={baseValue} placeholder={isClass? "اسم الشعبة " : "اسم الصف "} className="w-full h-fit p-2 text-right border-[#BFBFBF] border-[3px] rounded-lg outline-none " />
        </div>
        <Button title={'تعديل'} icon={<FiEdit></FiEdit>} ></Button>
      </form>
    </>
  )
}

function DeleteWarning ({ id, baseValue, isClass }) {
  const [state, formAction, isPending] = useActionState(
    isClass ? DeleteClass : DeleteGrade, 
    id
  )

  return (
    <>
      <form action={formAction} className="w-full h-fit flex flex-col justify-center items-start gap-4 p-4 ">
        <div className="w-full h-fit flex flex-col justify-start items-start">
          <div className="text-base font-semibold ">
            متأكد من القيام بعملية الحذف؟
          </div>
          <div className="text-sm opacity-50 ">
            المعلومات المحذوفة غير قابلة للاسترجاع !!
          </div>
        </div>
        <div className="flex gap-2" >
          <Button title={'حذف'} icon={<FiTrash2 color="red"></FiTrash2>} textColor={"red"} borderColor={"red"} ></Button>
        </div>
      </form>
    </>
  )
}

function NewPublicAnnouncementForm () {
  const [state, formAction, isPending] = useActionState(AddNewPublicAnnouncement, null)
  
  return (
    <>
      <form action={formAction} className="w-full h-fit flex flex-col justify-center items-start gap-2 p-4 ">
        <div className="w-full h-fit flex flex-col justify-start items-start gap-2">
          <label htmlFor="content" className="text-base font-semibold ">
            الإعلان
          </label>
          <textarea id="content" required name="content" placeholder="محتوى الإعلان" className="w-full h-fit p-2 text-right border-[#BFBFBF] border-[3px] rounded-lg outline-none " />
        </div>
        <Button title={'إضافة'} icon={<FiPlus></FiPlus>} ></Button>
      </form>
    </>
  )
}

function EditPublicAnnouncementForm ({ id, value }) {
  const [state, formAction, isPending] = useActionState(EditPublicAnnouncement, id)
  const [baseValue, setBaseValue] = useState(value)
  
  return (
    <>
      <form action={formAction} className="w-full h-fit flex flex-col justify-center items-start gap-2 p-4 ">
        <div className="w-full h-fit flex flex-col justify-start items-start gap-2">
          <label htmlFor="content" className="text-base font-semibold ">
              الإعلان
          </label>
          <textarea id="content" onChange={(event) => setBaseValue(event.target.value)} value={baseValue} required name="new-content" placeholder="محتوى الإعلان" className="w-full h-fit p-2 text-right border-[#BFBFBF] border-[3px] rounded-lg outline-none " />
        </div>
        <Button title={'تعديل'} icon={<FiEdit></FiEdit>} ></Button>
      </form>
    </>
  )
}

function PublicAnnouncementDeleteWarning ({ ids }) {
  const [state, formAction, isPending] = useActionState(DeletePublicAnnouncement,  ids)

  return (
    <>
      <form action={formAction} className="w-full h-fit flex flex-col justify-center items-start gap-4 p-4 ">
        <div className="w-full h-fit flex flex-col justify-start items-start">
          <div className="text-base font-semibold ">
            متأكد من القيام بعملية الحذف؟
          </div>
          <div className="text-sm opacity-50 ">
            المعلومات المحذوفة غير قابلة للاسترجاع !!
          </div>
        </div>
        <div className="flex gap-2" >
          <Button title={'حذف'} icon={<FiTrash2 color="red"></FiTrash2>} textColor={"red"} borderColor={"red"} ></Button>
        </div>
      </form>
    </>
  )
}

export { 
  NewGradeForm, 
  NewClassForm, 
  EditGradeAndClassNameForm, 
  DeleteWarning, 
  NewPublicAnnouncementForm, 
  EditPublicAnnouncementForm, 
  PublicAnnouncementDeleteWarning 
}