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
    accessorKey: "firstName",
    header: ({ table }) => <div className="flex justify-start items-center font-semibold ">الاسم</div>,
    cell: ({ row }) => <div >{row.getValue("firstName")}</div>,
  },
  {
    accessorKey: "lastName",
    header: ({ table }) => <div className="flex justify-start items-center font-semibold ">الكنية</div>,
    cell: ({ row }) => <div >{row.getValue("lastName")}</div>,
  },
  {
    accessorKey: "fatherName",
    header: ({ table }) => <div className="flex justify-start items-center font-semibold ">اسم الأب</div>,
    cell: ({ row }) => <div >{row.getValue("fatherName")}</div>,
  },
  {
    accessorKey: "motherName",
    header: ({ table }) => <div className="flex justify-start items-center font-semibold ">اسم الأم</div>,
    cell: ({ row }) => <div >{row.getValue("motherName")}</div>,
  },
  {
    accessorKey: "grade",
    header: ({ table }) => <div className="flex justify-start items-center font-semibold ">الصف</div>,
    cell: ({ row }) => <div >{row.getValue("grade")}</div>,
  },
  {
    accessorKey: "classId",
    header: ({ table }) => <div className="flex justify-start items-center font-semibold ">الشعبة</div>,
    cell: ({ row }) => <div >{row.getValue("classId")}</div>,
  },
  {
    accessorKey: "grades",
    header: ({ table }) => <div className="flex justify-start items-center font-semibold ">العلامات</div>,
    cell: ({ row }) => <div >{row.getValue("grades")}</div>,
  },
  {
    accessorKey: "notes",
    header: ({ table }) => <div className="flex justify-start items-center font-semibold ">الملاحظات</div>,
    cell: ({ row }) => <div >{row.getValue("notes")}</div>,
  },
  {
    accessorKey: "account",
    header: ({ table }) => <div className="flex justify-start items-center font-semibold ">حساب الطالب</div>,
    cell: ({ row }) => <div >{row.getValue("account")}</div>,
  },
]
