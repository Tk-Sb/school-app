import DialogForm from "@/components/dialog-form";
import { NewGradeForm } from "@/components/forms";
import Button from "@/components/ui/button";
import { FiPlus } from "react-icons/fi";

export default function Loading() {
  return (
    <div className="w-full h-full flex flex-col justify-start rounded-2xl border-[#BFBFBF] border-[3px] ">
        <div className="w-full h-fit flex justify-between items-center p-2 border-[#BFBFBF] border-b-[3px] " >
          <DialogForm form={<NewGradeForm></NewGradeForm>} header={"إضافة صف جديد"}>
            <Button title={'إضافة'} icon={<FiPlus></FiPlus>} ></Button>
          </DialogForm>
          <div className="text-base font-semibold ">
            الصفوف و الشعب
          </div>
        </div>
        <div>
          Loading...
        </div>
      </div>
  )
}