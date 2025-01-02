import AccordionButton from "@/components/accordion-button";
import { db } from "@/db/db";
import { classes, gradeLevels } from "@/db/schema";

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
      <div className="w-full h-full flex flex-col gap-1 rounded-2xl border-[#BFBFBF] border-[3px] p-3 overflow-scroll ">
        {grades.map(grade => (
          <>
            <AccordionButton key={grade.id} gradeName={grade.gradeName} classes={grade.classes} ></AccordionButton>
          </>
        ))}
      </div>
    </>
  )
}