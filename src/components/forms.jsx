'use client'

import { AddNewClass, AddNewGrade } from "@/actions/action"
import { useActionState } from "react"
import { FiLoader, FiPlus } from "react-icons/fi"

function NewGradeForm () {
  const [state, formAction, isPending] = useActionState(AddNewGrade, null)
  
  return (
    <>
      <form action={formAction} className="w-full h-fit flex flex-col justify-center items-end gap-2 p-4 ">
        <div className="w-full h-fit flex flex-col justify-start items-end gap-2">
          <label htmlFor="name" className="text-base font-semibold text-right">
            اسم الصف
          </label>
          <input id="name" name="grade-name" required placeholder="اسم الصف الجديد" className="w-full h-fit p-2 text-right border-[#BFBFBF] border-[3px] rounded-lg outline-none " />
        </div>
        <button disabled={isPending} type="submit" className="w-fit h-fit flex rounded-sm gap-1 border-[#BFBFBF] border-[3px] p-2 " >
          <div className="text-xs font-semibold ">
            {!isPending && 
              <h1>
                إضافة
              </h1>
            }
            {isPending && 
              <h1>
                <FiLoader></FiLoader>
              </h1>
            }
          </div>
          <FiPlus></FiPlus>
        </button>
      </form>
    </>
  )
}

function NewClassForm ({ id }) {
  const [state, formAction, isPending] = useActionState(AddNewClass, id)

  
  
  return (
    <>
      <form action={formAction} className="w-full h-fit flex flex-col justify-center items-end gap-2 p-4 ">
        <div className="w-full h-fit flex flex-col justify-start items-end gap-2">
          <label htmlFor="name" className="text-base font-semibold text-right">
            اسم الشعبة
          </label>
          <input id="name" name="class-name"  placeholder="اسم الشعبة الجديدة" className="w-full h-fit p-2 text-right border-[#BFBFBF] border-[3px] rounded-lg outline-none " />
        </div>
        <button disabled={isPending} type="submit" className="w-fit h-fit flex rounded-sm gap-1 border-[#BFBFBF] border-[3px] p-2 " >
          <div className="text-xs font-semibold ">
            {!isPending && 
              <h1>
                إضافة
              </h1>
            }
            {isPending && 
              <h1>
                <FiLoader></FiLoader>
              </h1>
            }
          </div>
          <FiPlus></FiPlus>
        </button>
      </form>
    </>
  )
}

export { NewGradeForm, NewClassForm }