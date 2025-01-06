import AccordionButton from "@/components/accordion-button";
import DrawerButton from "@/components/drawer-button";
import { NewGradeForm } from "@/components/forms";
import { db } from "@/db/db";
import { classes, gradeLevels } from "@/db/schema";
import { FiPlus } from "react-icons/fi";

export default async function ClassesSection () {
  const allGrades = await db.select().from(gradeLevels)
  const allClasses = await db.select().from(classes)

  const result = allGrades.map(grade => ({  
    id: grade.id,  
    name: grade.name,  
    classes: allClasses.filter(cls => cls.gradeLevelId === grade.id).map(cls => ({  
      id: cls.id,  
      name: cls.name  
    }))  
  }))
  
  return (
    <>
      <div className="w-full h-full flex flex-col rounded-2xl border-[#BFBFBF] border-[3px] ">
        <div className="w-full h-fit p-3 border-[#BFBFBF] border-b-[3px] " >
          <DrawerButton form={<NewGradeForm></NewGradeForm>} header={"إضافة صف جديد"}>
            <button variant="outline" className="w-fit h-fit flex rounded-sm gap-1 border-[#BFBFBF] border-[3px] p-2 " >
              <FiPlus></FiPlus>
              <div className="text-xs font-semibold ">
                إضافة
              </div>
            </button>
          </DrawerButton>
        </div>
        <div className="w-full h-fit flex flex-col gap-1 p-3 overflow-y-auto " >
          {result.map(grade => (
            <>
              <AccordionButton key={grade.id} id={grade.id} gradeName={grade.name} classes={grade.classes} ></AccordionButton>
            </>
          ))}
        </div>
      </div>
    </>
  )
}