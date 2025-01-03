import AccordionButton from "@/components/accordion-button";
import DrawerButton from "@/components/drawer-button";
import { db } from "@/db/db";
import { classes, gradeLevels } from "@/db/schema";
import { eq } from "drizzle-orm";

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
      <div className="w-full h-full flex flex-col rounded-2xl border-[#BFBFBF] border-[3px] overflow-y-scroll ">
        <div className="w-full h-fit p-3 " >
          <DrawerButton></DrawerButton>
        </div>
        <div className="w-full h-[3px] bg-[#BFBFBF] " />
        <div className="w-full h-fit flex flex-col gap-1 p-3 " >
          {result.map(grade => (
            <>
              <AccordionButton key={grade.id} gradeName={grade.name} classes={grade.classes} ></AccordionButton>
            </>
          ))}
        </div>
      </div>
    </>
  )
}