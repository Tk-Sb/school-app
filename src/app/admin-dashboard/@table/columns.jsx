'use client'

import { Checkbox } from "@/components/ui/checkbox"

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="flex justify-end items-center gap-1 ">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          />
          <div className="font-semibold "> 
            الكل
          </div>
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex justify-end items-center gap-1 ">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          />
        <div className="opacity-0 select-none ">
          الكل
        </div>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ table }) => <div className="flex justify-center items-center font-semibold ">الرقم</div>,
    cell: ({ row }) => <div className="flex justify-center items-center ">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "content",
    header: ({ table }) => <div className="flex justify-start items-center font-semibold ">الإعلان</div>,
    cell: ({ row }) => <div >{row.getValue("content")}</div>,
  },
]
