import DataTable from "@/components/ui/data-table";
import { columns } from "./columns";

export default function Loading() {
  const data = []

  return (
    <div className="w-full h-full flex flex-col justify-start rounded-2xl border-[#BFBFBF] border-[3px] ">
      <DataTable columns={columns} data={data} />
    </div>
  )
}