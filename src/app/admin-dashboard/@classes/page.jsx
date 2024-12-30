import AccordionButtons from "@/components/accordion";

export default function ClassesSection () {
  const grades = [
    {id: 1, gradeName: "الصف الأول", classes: ["الشعبة الأولى", "الشعبة الثانية"]},
    {id: 2, gradeName: "الصف الثاني", classes: ["الشعبة الأولى", "الشعبة الثانية"]},
  ]

  return (
    <>
      <div className="w-full h-full rounded-2xl border-[#BFBFBF] border-[3px] p-3 ">
        {grades.map(grade => (
          <>
            <AccordionButtons gradeName={grade.gradeName} classes={grade.classes} ></AccordionButtons>
          </>
        ))}
        
      </div>
    </>
  )
}