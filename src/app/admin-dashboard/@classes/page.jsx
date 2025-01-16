import AccordionButton from "@/components/accordion-button";
import DialogForm from "@/components/dialog-form";
import { NewGradeForm } from "@/components/forms";
import Button from "@/components/ui/button";
import { db } from "@/db/db";
import { classes, gradeLevels } from "@/db/schema";
import { FiPlus } from "react-icons/fi";

export default async function ClassesSection () {
  const allGrades = await db.select().from(gradeLevels)
  const allClasses = await db.select().from(classes)

  // reformat the fetched data
  const reformattedData = allGrades.map(grade => ({
    id: grade.id,
    name: grade.name,
    classes: allClasses.filter(cls => cls.gradeLevelId === grade.id).map(cls => ({
      id: cls.id,
      name: cls.name
    }))
  }))

  // sorting grades by name
  const sortedData = reformattedData.sort((a, b) => {
    return a.name.localeCompare(b.name, 'ar')
  })

  return (
    <>
      <div className="w-full h-full flex flex-col justify-start rounded-2xl border-[#BFBFBF] border-[3px] ">
        <div className="w-64 h-fit flex justify-between items-center p-2 border-[#BFBFBF] border-b-[3px] " >
          <DialogForm form={<NewGradeForm></NewGradeForm>} header={"إضافة صف جديد"}>
            <Button title={'إضافة'} icon={<FiPlus></FiPlus>} ></Button>
          </DialogForm>
          <div className="text-base font-semibold ">
            الصفوف و الشعب
          </div>
        </div>
        <div className="w-full h-fit flex flex-col gap-1 p-2 overflow-y-auto " >
          {sortedData.map(grade => (
            <>
              <AccordionButton key={grade.id} grade={grade} ></AccordionButton>
            </>
          ))}
        </div>
      </div>
    </>
  )
}