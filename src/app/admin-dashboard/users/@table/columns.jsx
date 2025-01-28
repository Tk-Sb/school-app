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
    accessorKey: "first-name",
    header: ({ table }) => <div className="flex justify-start items-center font-semibold ">الاسم</div>,
    cell: ({ row }) => <div >{row.getValue("first-name")}</div>,
  },
  {
    accessorKey: "last-name",
    header: ({ table }) => <div className="flex justify-start items-center font-semibold ">الكنية</div>,
    cell: ({ row }) => <div >{row.getValue("last-name")}</div>,
  },
  {
    accessorKey: "father-name",
    header: ({ table }) => <div className="flex justify-start items-center font-semibold ">اسم الأب</div>,
    cell: ({ row }) => <div >{row.getValue("father-name")}</div>,
  },
  {
    accessorKey: "mother-name",
    header: ({ table }) => <div className="flex justify-start items-center font-semibold ">اسم الأم</div>,
    cell: ({ row }) => <div >{row.getValue("mother-name")}</div>,
  },
  {
    accessorKey: "grade",
    header: ({ table }) => <div className="flex justify-start items-center font-semibold ">الصف</div>,
    cell: ({ row }) => <div >{row.getValue("grade")}</div>,
  },
  {
    accessorKey: "class",
    header: ({ table }) => <div className="flex justify-start items-center font-semibold ">الشعبة</div>,
    cell: ({ row }) => <div >{row.getValue("class")}</div>,
  },
]
