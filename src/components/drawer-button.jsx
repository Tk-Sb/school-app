'use client'

import { AddNewGrade } from "@/actions/action"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useActionState } from "react"
import { FiPlus } from "react-icons/fi"

export default function DrawerButton () {
  const [state, formAction, isPending] = useActionState(AddNewGrade, null)

  return (
    <>
      <Dialog>
      <DialogTrigger asChild>
        <button variant="outline" className="w-fit h-fit flex rounded-sm gap-1 border-[#BFBFBF] border-[3px] p-2 " >
          <FiPlus></FiPlus>
          <div className="text-xs font-semibold ">
            إضافة
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className={"w-full h-fit text-right p-3 "} >
            إضافة صف جديد
          </DialogTitle>
        </DialogHeader>
        <form action={formAction}>
          <div className="grid gap-4 py-4">
            <div className="w-full h-fit flex flex-col justify-start items-end gap-2">
              <label htmlFor="name" className="text-base font-semibold text-right">
                اسم الصف الجديد
              </label>
              <input id="name" name="grade-name" className="w-full h-fit p-2 text-right border-[#BFBFBF] border-[3px] rounded-lg outline-none " />
            </div>
          </div>
          <DialogFooter>
            <button disabled={isPending} type="submit" className="w-fit h-fit flex rounded-sm gap-1 border-[#BFBFBF] border-[3px] p-2 " >
              <div className="text-xs font-semibold ">
                إضافة
              </div>
              <FiPlus></FiPlus>
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
    </>
  )
}
