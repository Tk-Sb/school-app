import { columns } from "./columns";
import { db } from "@/db/db";
import { publicAnnouncements } from "@/db/schema";
import DataTable from "./data-table";

export default async function TableSection () {
  const data = await db.select().from(publicAnnouncements)

  // sorting the array by id
  data.sort((a, b) => a.id - b.id)

  return (
    <>
      <div className="w-full h-full rounded-2xl border-[#BFBFBF] border-[3px] ">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  )
}