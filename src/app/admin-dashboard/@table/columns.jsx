'use client'

import { Checkbox } from "@/components/ui/checkbox"

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="w-fit flex gap-2 bg-blue-100 ">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
        <h1>
          الكل
        </h1>
      </div>
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: () => <div className="w-fit text-right bg-blue-100">الرقم</div>,
  },
  {
    accessorKey: "content",
    header: () => <div className="w-fit text-right bg-blue-100">الإعلان</div>,
  }
]