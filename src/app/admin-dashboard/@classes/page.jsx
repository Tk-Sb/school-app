import AccordionButton from "@/components/accordion-button";
import DrawerButton from "@/components/drawer-button";
import { db } from "@/db/db";
import { classes, gradeLevels } from "@/db/schema";
import { FiPlus } from "react-icons/fi";

export default async function ClassesSection () {
  // const data = await db.select().from(classes)
  // console.log(data)
  const grades = [
    {id: 1, gradeName: "الصف الأول", classes: [{classId: 1, className: "الشعبة الأولى"}, {classId: 2, className: "الشعبة الثانية"} ]},
    {id: 1, gradeName: "الصف الأول", classes: [{classId: 1, className: "الشعبة الأولى"}, {classId: 2, className: "الشعبة الثانية"} ]},
    {id: 1, gradeName: "الصف الأول", classes: [{classId: 1, className: "الشعبة الأولى"}, {classId: 2, className: "الشعبة الثانية"} ]},
    {id: 1, gradeName: "الصف الأول", classes: [{classId: 1, className: "الشعبة الأولى"}, {classId: 2, className: "الشعبة الثانية"} ]},
    {id: 1, gradeName: "الصف الأول", classes: [{classId: 1, className: "الشعبة الأولى"}, {classId: 2, className: "الشعبة الثانية"} ]},
  ]

  return (
    <>
      <div className="w-full h-full flex flex-col rounded-2xl border-[#BFBFBF] border-[3px] overflow-y-scroll ">
        <div className="w-full h-fit p-3 " >
          <DrawerButton></DrawerButton>
        </div>
        <div className="w-full h-[3px] bg-[#BFBFBF] " />

        <div className="w-full h-fit flex flex-col gap-1 p-3 " >
          {grades.map(grade => (
            <>
              <AccordionButton key={grade.id} gradeName={grade.gradeName} classes={grade.classes} ></AccordionButton>
            </>
          ))}
        </div>
      </div>
    </>
  )
}