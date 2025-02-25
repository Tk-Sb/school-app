import { columns } from "./columns";
import { db } from "@/db/db";
import { students } from "@/db/schema";
import DataTable from "./data-table";

export default async function TableSection () {
  const data = await db.select().from(students)
  console.log(data)
  // sorting the array by id
  // data.sort((a, b) => a.id - b.id)

  return (
    <>
      <div className="w-full h-full rounded-2xl border-[#BFBFBF] border-[3px] ">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  )
}